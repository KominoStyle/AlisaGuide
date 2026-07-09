import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse as parseYaml } from "yaml";
import { Stance } from "../schema/stance";
import { buildAlisaMoves } from "./buildMoves.node";

/**
 * NODE-ONLY builder (uses `fs`). Reads + validates the four stance guide files
 * in fixed display order (DES → SBT → DBT → BKP), verifies that every move
 * reference resolves to an existing MOVES id, and returns the plain `STANCES`
 * array. Shared by the Vite plugin (client build) and `content:check`. Never
 * imported by client/browser code, so `yaml`/`zod` stay out of the bundle.
 */

const STANCE_ORDER = ["des", "sbt", "dbt", "bkp"] as const;
const STANCES_DIR = join(process.cwd(), "content", "tekken8", "characters", "alisa", "stances");

export function buildAlisaStances(): Stance[] {
  const { moves } = buildAlisaMoves();
  const stances = STANCE_ORDER.map((id) => {
    const s = Stance.parse(parseYaml(readFileSync(join(STANCES_DIR, `${id}.yml`), "utf8")));
    if (s.id !== id) throw new Error(`stances/${id}.yml declares id "${s.id}" (expected "${id}")`);
    return s;
  });
  const missing: string[] = [];
  for (const s of stances) {
    const refs = [
      ...(s.commonEntries ?? []),
      ...s.keyOptions,
      ...(s.safeOptions ?? []),
      ...(s.riskyOptions ?? []),
      ...(s.lows ?? []),
      ...(s.mids ?? []),
    ];
    for (const ref of refs) {
      if (!(ref.move in moves)) missing.push(`${s.id}: "${ref.move}"`);
    }
  }
  if (missing.length) {
    throw new Error(`stance move ref(s) not found in MOVES: ${missing.join(", ")}`);
  }
  return stances;
}
