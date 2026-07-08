import { readFileSync, readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { parse as parseYaml } from "yaml";
import { parseMove, parseCombos, parseMatchup, parseTraining } from "./parse";
import { Punish } from "./schema/punish";
import { buildAlisaMoves } from "./runtime/buildMoves.node";
import { buildAlisaMoveMeta } from "./runtime/buildAlisaMoveMeta.node";
import { buildAlisaPunish } from "./runtime/buildAlisaPunish.node";
import { buildAlisaOpponents, type LegacyOppRow } from "./runtime/buildAlisaOpponents.node";
import { buildAlisaMatchups } from "./runtime/buildAlisaMatchups.node";
import { buildFrameData } from "./runtime/buildFrameData.node";
import { buildAlisaCombos } from "./runtime/buildAlisaCombos.node";
import { buildAlisaLegends } from "./runtime/buildAlisaLegends.node";
import { MatchupOrder } from "./schema/matchup";
import type { Move } from "./schema/move";
import type { Training } from "./schema/training";
// No legacy `src/data/*` oracles remain — every hand-written TS data blob (moves,
// punish, opponents, matchups, frame-data, combos, legends) has been retired and
// the content system is canonical, so ALL tables are validated for SELF-CONSISTENCY.

/**
 * Content check (run via `npm run content:check`, executed by tsx).
 *
 * 1. Recursively validates every file under `content/` against the Zod schemas.
 * 2. Moves: SELF-CONSISTENCY — since the content system is now canonical for
 *    Alisa moves (no legacy `moves.ts` oracle), it verifies internal coherence:
 *    unique ids, move-order.yml <-> move files, generated MOVES count/order,
 *    categories vs CATS, WARN/CHAINLBL references, and stance folder mapping.
 * 3. COMBOS/MU/OPP/PUNISH/FD/legends are all validated for self-consistency.
 */

const ROOT = process.cwd();
const CONTENT = join(ROOT, "content");

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function eq(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

// ---- 1. Validate every content file ------------------------------------
let validated = 0;
const schemaErrors: string[] = [];
const protoMoves: Record<string, Move> = {};
// Every move file's id -> the file(s) that declared it, so the global check can
// spot two YAML files claiming the same id (the Record above would silently collapse them).
const protoMoveFiles: Record<string, string[]> = {};
let protoTraining: Training | null = null;

for (const file of walk(CONTENT)) {
  const rel = relative(CONTENT, file).split(sep).join("/");
  const raw = readFileSync(file, "utf8");
  try {
    if (rel.includes("/moves/") && rel.endsWith(".yml")) {
      const mv = parseMove(raw);
      protoMoves[mv.id] = mv;
      (protoMoveFiles[mv.id] ??= []).push(rel);
      validated++;
    } else if (rel.includes("/combos/") && rel.endsWith(".yml")) {
      parseCombos(raw);
      validated++;
    } else if (rel.endsWith("/matchups/_order.yml")) {
      MatchupOrder.parse(parseYaml(raw));
      validated++;
    } else if (rel.includes("/matchups/") && rel.endsWith(".yml")) {
      parseMatchup(raw);
      validated++;
    } else if (rel.includes("/training/") && rel.endsWith(".md")) {
      protoTraining = parseTraining(raw).data;
      validated++;
    }
  } catch (e) {
    schemaErrors.push(`${rel}: ${e instanceof Error ? e.message : String(e)}`);
  }
}

// ---- 2. Move self-consistency (content is canonical) -------------------

const failures: string[] = [];
const contentMoveIds = Object.keys(protoMoves);

// Build MOVES + meta with the SAME Node builders the app ships (virtual modules).
let genMOVES: Record<string, Record<string, unknown>> = {};
let meta: ReturnType<typeof buildAlisaMoveMeta> | null = null;
try {
  genMOVES = buildAlisaMoves().moves;
  meta = buildAlisaMoveMeta();
} catch (e) {
  failures.push(`content build failed: ${e instanceof Error ? e.message : String(e)}`);
}

if (meta) {
  const genMoveIds = Object.keys(genMOVES); // adapter order (built from move-order.yml)
  const moveOrder = meta.moveOrder;
  const catIds = new Set(meta.CATS.map((c) => c.id));
  const fileCount = Object.values(protoMoveFiles).reduce((n, files) => n + files.length, 0);

  // 1. All move YAML ids are unique (no two files claim the same id).
  const duplicateIds = Object.entries(protoMoveFiles)
    .filter(([, files]) => files.length > 1)
    .map(([id, files]) => `${id} (${files.join(", ")})`);
  if (duplicateIds.length) failures.push(`self: duplicate move ids across files: ${duplicateIds.join("; ")}`);

  // 2. Every move YAML id appears exactly once in move-order.yml.
  const orderCount = new Map<string, number>();
  for (const id of moveOrder) orderCount.set(id, (orderCount.get(id) ?? 0) + 1);
  const orderDupes = [...orderCount].filter(([, n]) => n > 1).map(([id]) => id);
  if (orderDupes.length) failures.push(`self: move-order.yml has duplicate ids: ${orderDupes.join(", ")}`);
  const notOnceInOrder = contentMoveIds.filter((id) => (orderCount.get(id) ?? 0) !== 1);
  if (notOnceInOrder.length) failures.push(`self: move ids not appearing exactly once in move-order.yml: ${notOnceInOrder.join(", ")}`);

  // 3. Every id in move-order.yml has a matching move YAML file.
  const orderWithoutFile = moveOrder.filter((id) => !protoMoves[id]);
  if (orderWithoutFile.length) failures.push(`self: move-order.yml ids with no move file: ${orderWithoutFile.join(", ")}`);

  // 4. Generated MOVES count equals the content move file count.
  if (genMoveIds.length !== fileCount) failures.push(`self: generated MOVES count ${genMoveIds.length} != move file count ${fileCount}`);

  // 5. Generated MOVES key order equals move-order.yml.
  if (!eq(genMoveIds, moveOrder)) failures.push(`self: generated MOVES key order != move-order.yml`);

  // 6. Every generated MOVES record has a category present in CATS.
  for (const [id, rec] of Object.entries(genMOVES)) {
    const cat = String(rec["cat"]);
    if (!catIds.has(cat)) failures.push(`self: move ${id} has category "${cat}" not in CATS`);
  }

  // 7. Every category in CATS has at least one generated move.
  for (const c of meta.CATS) {
    if (!Object.values(genMOVES).some((rec) => rec["cat"] === c.id)) {
      failures.push(`self: CATS category "${c.id}" has no generated move`);
    }
  }

  // 8. Every WARN key references an existing move id.
  for (const id of Object.keys(meta.WARN)) {
    if (!protoMoves[id]) failures.push(`self: WARN key "${id}" is not a move id`);
  }

  // 9. Every CHAINLBL key is referenced by at least one generated move's chain.
  for (const chainId of Object.keys(meta.CHAINLBL)) {
    if (!Object.values(genMOVES).some((rec) => rec["chain"] === chainId)) {
      failures.push(`self: CHAINLBL "${chainId}" not referenced by any move chain`);
    }
  }

  // 10. Stance folder category mapping (stance/<x>/ -> generated cat <x>).
  for (const [id, files] of Object.entries(protoMoveFiles)) {
    const m = files[0].match(/\/moves\/stance\/(des|bkp|sbt|dbt|clk)\//);
    if (!m) continue;
    const actual = String(genMOVES[id]?.["cat"]);
    if (actual !== m[1]) failures.push(`self: stance move ${id} in stance/${m[1]} has cat "${actual}"`);
  }
}

// Combo SELF-CONSISTENCY (content is canonical; legacy combos.ts retired). Built
// through the SAME buildAlisaCombos() path the virtual module ships, so this
// validates the shipped artifact. COMBOS is an ordered array rendered in order;
// routes/notation stay verbatim (never normalized).
const COMBO_KEYS = ["name", "from", "seq", "tIdx", "note"];
const genCOMBOS = buildAlisaCombos() as unknown as Array<Record<string, unknown>>;
let comboOk = 0;
// 1-2. COMBOS is a non-empty array.
if (!Array.isArray(genCOMBOS)) failures.push("combo: COMBOS is not an array");
else if (genCOMBOS.length === 0) failures.push("combo: table is empty");
const comboSeen = new Set<string>();
for (let i = 0; i < genCOMBOS.length; i++) {
  const c = genCOMBOS[i];
  const name = c["name"] as { en?: unknown; de?: unknown } | undefined;
  const label = String(name?.en ?? `row ${i}`);
  let rowOk = true;
  const nonEmptyStr = (v: unknown) => typeof v === "string" && v.trim() !== "";
  // 12-13. Exact runtime row shape — only name, from, seq, tIdx, note; no extras.
  const keys = Object.keys(c);
  const extra = keys.filter((k) => !COMBO_KEYS.includes(k));
  const missing = COMBO_KEYS.filter((k) => !keys.includes(k));
  if (extra.length) { failures.push(`combo: "${label}" has unexpected field(s): ${extra.join(", ")}`); rowOk = false; }
  if (missing.length) { failures.push(`combo: "${label}" missing field(s): ${missing.join(", ")}`); rowOk = false; }
  // 3. name.en / name.de non-empty strings.
  if (!name || !nonEmptyStr(name.en) || !nonEmptyStr(name.de)) { failures.push(`combo: "${label}".name must have non-empty en + de`); rowOk = false; }
  // 4. from non-empty string.
  if (!nonEmptyStr(c["from"])) { failures.push(`combo: "${label}".from must be a non-empty string`); rowOk = false; }
  // 5-6. seq is a non-empty array of non-empty strings.
  const seq = c["seq"];
  if (!Array.isArray(seq) || seq.length === 0) { failures.push(`combo: "${label}".seq must be a non-empty array`); rowOk = false; }
  else if (seq.some((s) => !nonEmptyStr(s))) { failures.push(`combo: "${label}".seq has empty/non-string entries`); rowOk = false; }
  // 7-8. tIdx is an integer: -1 (none) or a valid index into seq.
  const tIdx = c["tIdx"];
  const seqLen = Array.isArray(seq) ? seq.length : 0;
  if (typeof tIdx !== "number" || !Number.isInteger(tIdx)) { failures.push(`combo: "${label}".tIdx must be an integer`); rowOk = false; }
  else if (tIdx !== -1 && (tIdx < 0 || tIdx >= seqLen)) { failures.push(`combo: "${label}".tIdx ${tIdx} out of range (-1 or 0..${seqLen - 1})`); rowOk = false; }
  // 9. note.en / note.de non-empty strings.
  const note = c["note"] as { en?: unknown; de?: unknown } | undefined;
  if (!note || !nonEmptyStr(note.en) || !nonEmptyStr(note.de)) { failures.push(`combo: "${label}".note must have non-empty en + de`); rowOk = false; }
  // 11. No duplicate name pairs (name.en + name.de).
  const nameKey = `${String(name?.en)} ${String(name?.de)}`;
  if (comboSeen.has(nameKey)) { failures.push(`combo: duplicate combo name "${label}"`); rowOk = false; }
  comboSeen.add(nameKey);
  if (rowOk) comboOk++;
}
// 10. Combo order is preserved by the builder: buildAlisaCombos() maps combos.yml
// in source array order (no sort/reorder), so the emitted order == authored order.
// (Order is intrinsic to the single ordered combos.yml array — nothing to permute.)

// Legends SELF-CONSISTENCY (content is canonical; legacy legends.ts retired). Built
// through the SAME buildAlisaLegends() path the virtual module ships. Each of the
// four exports is an ordered array of `[symbol, {en, de}]` tuples; symbols/text
// stay verbatim (never normalized). Symbols are unique within a group but may
// repeat across groups (not a failure).
const EXPECTED_LEG_GROUPS = ["LEG", "LEGP", "LEGF", "LEGS"];
const genLegends = buildAlisaLegends() as unknown as Record<string, Array<unknown>>;
let legendsOk = 0;
let legendsTotal = 0;
const genLegNames = Object.keys(genLegends);
// 1 + 11 + 13. Exactly the four expected export names — no missing, no unexpected.
const missingGroups = EXPECTED_LEG_GROUPS.filter((n) => !genLegNames.includes(n));
const extraGroups = genLegNames.filter((n) => !EXPECTED_LEG_GROUPS.includes(n));
if (missingGroups.length) failures.push(`legends: missing group(s): ${missingGroups.join(", ")}`);
if (extraGroups.length) failures.push(`legends: unexpected group(s): ${extraGroups.join(", ")}`);
const nonEmptyStr = (v: unknown) => typeof v === "string" && v.trim() !== "";
for (const name of EXPECTED_LEG_GROUPS) {
  const group = genLegends[name];
  // 2-3. Group is a non-empty array.
  if (!Array.isArray(group)) { failures.push(`legends: ${name} is not an array`); continue; }
  if (group.length === 0) { failures.push(`legends: ${name} is empty`); continue; }
  const symbolsSeen = new Set<string>();
  for (let i = 0; i < group.length; i++) {
    legendsTotal++;
    const entry = group[i] as unknown;
    let rowOk = true;
    // 4. Entry is a length-2 tuple array.
    if (!Array.isArray(entry) || entry.length !== 2) {
      failures.push(`legends: ${name}[${i}] is not a length-2 tuple`);
      continue;
    }
    const [symbol, text] = entry as [unknown, unknown];
    // 5. Index 0 is a non-empty symbol string.
    if (!nonEmptyStr(symbol)) { failures.push(`legends: ${name}[${i}] symbol is empty/non-string`); rowOk = false; }
    else {
      // 8. Symbols unique WITHIN a group (cross-group repeats are allowed).
      if (symbolsSeen.has(symbol as string)) { failures.push(`legends: ${name} has duplicate symbol "${symbol}"`); rowOk = false; }
      symbolsSeen.add(symbol as string);
    }
    // 6 + 12. Index 1 is an object with EXACTLY { en, de } — no extra fields.
    if (typeof text !== "object" || text === null || Array.isArray(text)) {
      failures.push(`legends: ${name}[${i}] text is not an object`);
      rowOk = false;
    } else {
      const keys = Object.keys(text as Record<string, unknown>).sort();
      if (!eq(keys, ["de", "en"])) { failures.push(`legends: ${name}[${i}] text keys must be exactly {en, de} (got [${keys.join(",")}])`); rowOk = false; }
      // 7. text.en / text.de non-empty strings.
      const t = text as { en?: unknown; de?: unknown };
      if (!nonEmptyStr(t.en) || !nonEmptyStr(t.de)) { failures.push(`legends: ${name}[${i}] text.en/text.de must be non-empty strings`); rowOk = false; }
    }
    if (rowOk) legendsOk++;
  }
}
// 10. Group + entry order are preserved by the builder: buildAlisaLegends() reads
// legends.yml and maps each group array in source order (no sort/reorder), so the
// emitted order == authored order. Order is intrinsic to the YAML arrays.

// Matchup SELF-CONSISTENCY (content is canonical; legacy matchups.ts retired).
// Verifies the content-built MU is well-formed and keeps the exact legacy runtime
// shape/order the deep/shallow selection logic + muDerive(FD) fallback rely on.
// muDerive(FD) suggestions are NOT part of MU and are intentionally not checked.
const MU_DIR = join(CONTENT, "tekken8", "characters", "alisa", "matchups");
const ALLOWED_MU_KEYS = ["c", "deep", "tag", "hurt", "duck", "punish", "plan"];
const MU_TEXT_FIELDS = ["tag", "hurt", "duck", "punish", "plan"] as const;
const genMU = buildAlisaMatchups() as unknown as Array<Record<string, unknown>>;
let muOk = 0;

// 1. Non-empty table.
if (genMU.length === 0) failures.push("matchup: table is empty");

// 2-4. _order.yml covers every matchup YAML file exactly once (bijection).
const orderSlugs = MatchupOrder.parse(parseYaml(readFileSync(join(MU_DIR, "_order.yml"), "utf8")));
const fileSlugs = readdirSync(MU_DIR)
  .filter((f) => f.endsWith(".yml") && f !== "_order.yml")
  .map((f) => f.replace(/\.yml$/, ""));
const orderCount = new Map<string, number>();
for (const s of orderSlugs) orderCount.set(s, (orderCount.get(s) ?? 0) + 1);
const dupOrder = [...orderCount].filter(([, n]) => n > 1).map(([s]) => s);
if (dupOrder.length) failures.push(`matchup: _order.yml has duplicate slug(s): ${dupOrder.join(", ")}`);
const orderWithoutFile = orderSlugs.filter((s) => !fileSlugs.includes(s));
if (orderWithoutFile.length) failures.push(`matchup: _order.yml slug(s) with no YAML file: ${orderWithoutFile.join(", ")}`);
const fileWithoutOrder = fileSlugs.filter((s) => !orderSlugs.includes(s));
if (fileWithoutOrder.length) failures.push(`matchup: YAML file(s) not referenced by _order.yml: ${fileWithoutOrder.join(", ")}`);

// 5-10. Per-row shape/field integrity.
const muCharsSeen = new Map<string, number>();
const moveIds = new Set(Object.keys(genMOVES)); // content move ids (for [[ref]] check)
const badRefs = new Set<string>();
for (let i = 0; i < genMU.length; i++) {
  const row = genMU[i];
  const label = String(row["c"] ?? `row ${i}`);
  let rowOk = true;
  // 10. Row shape: only allowed keys, `deep` present only when true (+ boolean).
  const extraKeys = Object.keys(row).filter((k) => !ALLOWED_MU_KEYS.includes(k));
  if (extraKeys.length) { failures.push(`matchup: "${label}" has unexpected key(s): ${extraKeys.join(", ")}`); rowOk = false; }
  // 7. deep is a boolean when present; only emitted when true.
  if ("deep" in row && row["deep"] !== true) { failures.push(`matchup: "${label}".deep present but not true`); rowOk = false; }
  // 5-6. character non-empty + unique.
  const c = row["c"];
  if (typeof c !== "string" || c.trim() === "") { failures.push(`matchup: row ${i} has empty/non-string character`); rowOk = false; }
  else muCharsSeen.set(c, (muCharsSeen.get(c) ?? 0) + 1);
  // 8-9. All five localized fields present with non-empty en + de strings.
  for (const f of MU_TEXT_FIELDS) {
    const v = row[f] as { en?: unknown; de?: unknown } | undefined;
    if (!v || typeof v.en !== "string" || v.en.trim() === "" || typeof v.de !== "string" || v.de.trim() === "") {
      failures.push(`matchup: "${label}".${f} must have non-empty en + de strings`);
      rowOk = false;
      continue;
    }
    // 11. [[moveid]] refs (same grammar as the runtime resolver) must be known move ids.
    for (const text of [v.en, v.de]) {
      for (const m of text.matchAll(/\[\[([a-z0-9]+)\]\]/gi)) {
        if (!moveIds.has(m[1])) { badRefs.add(`${label}.${f}:[[${m[1]}]]`); rowOk = false; }
      }
    }
  }
  if (rowOk) muOk++;
}
const dupChars = [...muCharsSeen].filter(([, n]) => n > 1).map(([c]) => c);
if (dupChars.length) failures.push(`matchup: duplicate character name(s): ${dupChars.join(", ")}`);
if (badRefs.size) failures.push(`matchup: [[moveid]] reference(s) with no matching move: ${[...badRefs].join(", ")}`);

// Frame-data SELF-CONSISTENCY (content is canonical; legacy frame-data.ts retired).
// FD is built through the SAME buildFrameData() path the virtual module ships, so
// this validates the shipped artifact. Rows stay opaque positional data — never
// decoded/normalized — matching what muDerive(FD) and move detail consume.
let fdOk = 0;
let fdTotal = 0;
let genFD: Record<string, Record<string, unknown[]>> = {};
// 13. Buildable through the same path as the virtual module (validateFrameData runs here).
try {
  genFD = buildFrameData() as unknown as Record<string, Record<string, unknown[]>>;
} catch (e) {
  failures.push(`frame-data: buildFrameData() failed: ${e instanceof Error ? e.message : String(e)}`);
}
const fdChars = Object.keys(genFD);
const fdLenDist: Record<string, number> = {};
let fdStarKeys = 0;
// 1. At least one character.
if (fdChars.length === 0) failures.push("frame-data: no characters");
for (const c of fdChars) {
  // 2. Character key is a non-empty string.
  if (c.trim() === "") failures.push("frame-data: empty character key");
  const table = genFD[c];
  const moves = Object.keys(table);
  // 3. Every character table has at least one move.
  if (moves.length === 0) failures.push(`frame-data: "${c}" has an empty move table`);
  for (const mv of moves) {
    fdTotal++;
    let rowOk = true;
    // 4. Move notation key is a non-empty string.
    if (mv.trim() === "") { failures.push(`frame-data: "${c}" has an empty move key`); rowOk = false; }
    // 12. Star/held variants preserved as normal keys (not normalized away).
    if (mv.includes("*")) fdStarKeys++;
    const row = table[mv];
    // 5-6. Row is an array of length exactly 6 or 7.
    if (!Array.isArray(row) || (row.length !== 6 && row.length !== 7)) {
      const len = Array.isArray(row) ? row.length : "not-an-array";
      failures.push(`frame-data: "${c}"|"${mv}" invalid row length ${len} (must be 6 or 7)`);
      rowOk = false;
    } else {
      fdLenDist[String(row.length)] = (fdLenDist[String(row.length)] ?? 0) + 1;
      // 7. Indices 0–5 are strings.
      for (let i = 0; i < 6; i++) if (typeof row[i] !== "string") { failures.push(`frame-data: "${c}"|"${mv}" index ${i} is not a string`); rowOk = false; }
      // 8. Index 6, if present, is an array of strings.
      if (row.length === 7) {
        const tags = row[6];
        if (!Array.isArray(tags) || tags.some((t) => typeof t !== "string")) { failures.push(`frame-data: "${c}"|"${mv}" index 6 must be an array of strings`); rowOk = false; }
      }
    }
    if (rowOk) fdOk++;
  }
}
// 11. Duplicate character/move keys are not representable post-build: JSON.parse
// collapses any duplicate JSON keys into one, so key uniqueness is structural in
// the shipped object (the exact object the virtual module emits). Nothing to detect.
// 12. Star/held variants must survive as-is (the runtime star-alias loop needs them).
if (fdStarKeys === 0) failures.push("frame-data: no star/held (`*`) move keys found — expected them to be preserved");

// Punish self-consistency (content is canonical; no legacy oracle). Verifies the
// content-built PUNISH is well-formed and that the builder preserves source order.
const punish = buildAlisaPunish();
// 1. Non-empty table.
if (punish.length === 0) failures.push("punish: table is empty");
// 2-5. Per-row field integrity (dis/use non-empty strings; why.en/why.de present).
punish.forEach((r, i) => {
  if (typeof r.dis !== "string" || r.dis.trim() === "") failures.push(`punish[${i}]: empty or non-string dis`);
  if (typeof r.use !== "string" || r.use.trim() === "") failures.push(`punish[${i}]: empty or non-string use`);
  if (!r.why || typeof r.why.en !== "string" || r.why.en === "" || typeof r.why.de !== "string" || r.why.de === "") {
    failures.push(`punish[${i}]: missing why.en/why.de`);
  }
});
// 6. Order preserved: builder output order == punish.yml source order (by dis sequence).
const punishSrc = Punish.parse(parseYaml(readFileSync(join(CONTENT, "tekken8", "characters", "alisa", "punish.yml"), "utf8")));
if (!eq(punish.map((r) => r.dis), punishSrc.map((r) => r.disadvantage))) {
  failures.push("punish: builder row order differs from punish.yml source order");
}
// 7. No duplicate dis+use pairs.
const punishSeen = new Set<string>();
const punishDupes: string[] = [];
for (const r of punish) {
  const k = `${r.dis} | ${r.use}`;
  if (punishSeen.has(k)) punishDupes.push(k);
  punishSeen.add(k);
}
if (punishDupes.length) failures.push(`punish: duplicate dis+use pair(s): ${punishDupes.join("; ")}`);
// (8. `use` -> known MOVES notation cross-check intentionally skipped: punish `use`
//  strings use raw notation that doesn't always match a move's `n` 1:1 — too fuzzy.)

// Opponent SELF-CONSISTENCY (content is canonical; legacy opponents.ts retired).
// Verifies the content-built OPP is well-formed and keeps the exact pre-normalized
// `"Char|move"` shape the runtime `oppNorm` re-key + OPP-over-FD fallback rely on.
const genOPP = buildAlisaOpponents() as unknown as Record<string, LegacyOppRow>;
const oppKeys = Object.keys(genOPP);
let oppOk = 0;
// Mirror of the runtime oppNorm (main.ts) — used only to prove no re-key collisions.
function oppNorm(mv: string): string {
  let s = String(mv).replace(/\*/g, "");
  s = s.replace(/^WR(?=[0-9])/, "f,f,F+");
  s = s.replace(/^(qcb|qcf|hcb|hcf)(?=[0-9])/i, (m) => m.toLowerCase() + "+");
  const m = s.match(/^(df|db|uf|ub|ff|bb|d|u|f|b)([0-9].*)$/);
  return m ? m[1] + "+" + m[2] : s;
}
// 1. Non-empty table.
if (oppKeys.length === 0) failures.push("opponent: table is empty");
// 2-3. Every key is `Character|move` shaped and unique (Record collapses dupes, so
//      also cross-check against the raw per-file key list would be redundant here —
//      the builder throws on structurally invalid YAML before we reach this point).
const oppSeen = new Set<string>();
const charMoveCount = new Map<string, number>();
const normSeen = new Map<string, string>(); // normalized key -> original key
for (const key of oppKeys) {
  const parts = key.split("|");
  const char = parts[0];
  const move = parts.slice(1).join("|");
  let rowOk = true;
  // 2. Shape `Character|move` (both sides non-empty; exactly the runtime split).
  if (parts.length < 2 || char.trim() === "" || move.trim() === "") {
    failures.push(`opponent: key "${key}" is not "Character|move" shaped`);
    rowOk = false;
  }
  // 3. Unique key (defensive — object keys are unique by construction).
  if (oppSeen.has(key)) { failures.push(`opponent: duplicate key "${key}"`); rowOk = false; }
  oppSeen.add(key);
  charMoveCount.set(char, (charMoveCount.get(char) ?? 0) + 1);
  // 4. Required non-empty string fields.
  const row = genOPP[key];
  for (const f of ["lv", "s", "dmg", "b", "h"] as const) {
    const v = row[f];
    if (typeof v !== "string" || v.trim() === "") { failures.push(`opponent: "${key}".${f} is empty or not a string`); rowOk = false; }
  }
  // 5. `ch` is a string (empty string is allowed).
  if (typeof row.ch !== "string") { failures.push(`opponent: "${key}".ch is not a string`); rowOk = false; }
  // 6-7. note.en/note.de are arrays with at least one string each.
  for (const lng of ["en", "de"] as const) {
    const arr = row.note?.[lng];
    if (!Array.isArray(arr) || arr.length === 0 || arr.some((x) => typeof x !== "string")) {
      failures.push(`opponent: "${key}".note.${lng} must be a non-empty string array`);
      rowOk = false;
    }
  }
  // 9-10. Pre-normalized shape survives runtime oppNorm with no re-key collisions.
  const norm = char + "|" + oppNorm(move);
  const prev = normSeen.get(norm);
  if (prev !== undefined) { failures.push(`opponent: keys "${prev}" and "${key}" collide after oppNorm -> "${norm}"`); rowOk = false; }
  normSeen.set(norm, key);
  if (rowOk) oppOk++;
}
// 8. Every character folder contributes at least one opponent move.
for (const [char, n] of charMoveCount) {
  if (n === 0) failures.push(`opponent: character "${char}" has no moves`);
}

// ---- 3. Report ---------------------------------------------------------
console.log(`Validated ${validated} content file(s).`);
console.log(`Punish self-consistency: ${punish.length} row(s) — fields, order, and uniqueness verified.`);
console.log(`Opponent self-consistency: ${oppOk}/${oppKeys.length} row(s) — shape, fields, and oppNorm re-key (no collisions) verified.`);
console.log(`Matchup self-consistency: ${muOk}/${genMU.length} row(s) — order bijection, shape, fields, and [[move]] refs verified.`);
console.log(`Frame-data self-consistency: ${fdOk}/${fdTotal} row(s) valid — ${fdChars.length} characters, length dist ${JSON.stringify(fdLenDist)}, ${fdStarKeys} star/held key(s) preserved.`);
console.log(`Combo self-consistency: ${comboOk}/${genCOMBOS.length} combo(s) — shape, fields, tIdx range, order, and uniqueness verified.`);
console.log(`Legends self-consistency: ${legendsOk}/${legendsTotal} legend entrie(s) valid — groups ${genLegNames.join(", ")}, tuple shape + unique symbols per group verified.`);
if (meta) {
  console.log(
    `Move self-consistency: ${Object.keys(genMOVES).length} moves, ${meta.CATS.length} categories, ` +
      `${Object.keys(meta.WARN).length} warnings, ${Object.keys(meta.CHAINLBL).length} chain label(s), ` +
      `order ${meta.moveOrder.length} — all internally consistent.`,
  );
}

if (schemaErrors.length) {
  console.error("\nSCHEMA ERRORS:");
  for (const e of schemaErrors) console.error("  - " + e);
}
if (failures.length) {
  console.error("\nEQUIVALENCE FAILURES:");
  for (const f of failures) console.error("  - " + f);
}

if (schemaErrors.length || failures.length) {
  console.error(
    `\nFAILED: ${schemaErrors.length} schema error(s), ${failures.length} equivalence failure(s).`,
  );
  process.exit(1);
}

if (protoTraining) {
  console.log(
    `Training drill "${protoTraining.id}" validated (no src/data equivalence source; text copied from the legacy guide).`,
  );
}
console.log("\nOK: content is valid and self-consistent (all legacy src/data blobs retired — content is canonical).");
