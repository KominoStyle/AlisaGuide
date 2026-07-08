import type { Move } from "../schema/move";

/**
 * Pure content -> legacy adapter helpers (no fs, no Vite glob), so they can run
 * both in the Vite build (`alisaMoves.ts`) and under tsx in the parity checker
 * (`check.ts`). They rebuild the exact legacy runtime `MOVES[id]` shape the app
 * expects from a validated content `Move`.
 */

/** content category -> legacy `cat`, for every non-stance category. */
const CONTENT_TO_LEGACY_CAT: Record<string, string> = {
  jab: "jab",
  poke: "poke",
  low: "low",
  launcher: "launch",
  keepout: "keepout",
  homing: "homing",
  whiffPunish: "whiff",
  counterHitTool: "ch",
  comboTool: "combo",
  throw: "throw",
  special: "special",
};

/**
 * Derive the legacy `cat` for a content move. Non-stance categories map via the
 * table above. Stance moves are all stored as content category `stanceMove`, so
 * the original legacy stance category is recovered from the file path only
 * (`.../moves/stance/<cat>/<id>.yml`) — an adapter detail, not content modeling.
 */
export function deriveLegacyCat(move: Move, filePath: string): string {
  if (move.category !== "stanceMove") {
    const cat = CONTENT_TO_LEGACY_CAT[move.category];
    if (!cat) throw new Error(`move ${move.id}: no legacy cat for content category "${move.category}"`);
    return cat;
  }
  const m = filePath.replace(/\\/g, "/").match(/\/moves\/stance\/(des|bkp|sbt|dbt|clk)\//);
  if (!m) throw new Error(`stance move ${move.id}: cannot derive legacy cat from path "${filePath}"`);
  return m[1];
}

/**
 * Rebuild the legacy `MOVES[id]` record from a content `Move` + its derived
 * legacy `cat`. Required keys (present on every legacy move) are always emitted;
 * optional keys (`ch/x/note/dmg/key/keytip/chain`) are OMITTED when null so the
 * generated object key set matches legacy exactly (legacy stores them as absent,
 * never as an explicit null).
 */
export function toLegacyRecord(move: Move, legacyCat: string): Record<string, unknown> {
  const rec: Record<string, unknown> = {
    n: move.input.notation,
    cat: legacyCat,
    lv: move.difficulty,
    lev: move.levels,
    s: move.frames.startup,
    b: move.frames.block,
    h: move.frames.hit,
    p: move.properties,
    rng: move.range,
  };
  if (move.frames.ch != null) rec["ch"] = move.frames.ch;
  if (move.guide != null) rec["x"] = move.guide;
  if (move.note != null) rec["note"] = move.note;
  if (move.damage != null) rec["dmg"] = move.damage;
  if (move.key != null) rec["key"] = move.key;
  if (move.keytip != null) rec["keytip"] = move.keytip;
  if (move.chain != null) rec["chain"] = move.chain;
  return rec;
}
