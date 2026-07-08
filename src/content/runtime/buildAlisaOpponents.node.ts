import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { parse as parseYaml } from "yaml";
import { OpponentMoves } from "../schema/opponentMoves";

/**
 * NODE-ONLY builder (uses `fs`). Reads + validates every per-opponent
 * `opponent-moves.yml` and rebuilds the legacy-compatible `OPP` object:
 *   key   = `${character}|${notation}`
 *   value = { lv, s, dmg, b, h, ch, note }   (legacy field order + empty-`ch`)
 *
 * Shared by the Vite plugin (client build) and the parity checker. Never imported
 * by client/browser code, so `yaml`/`zod` stay out of the bundle.
 */

export interface LegacyOppRow {
  lv: string;
  s: string;
  dmg: string;
  b: string;
  h: string;
  ch: string;
  note: { en: string[]; de: string[] };
}

const CHARS_DIR = join(process.cwd(), "content", "tekken8", "characters");

export function buildAlisaOpponents(): Record<string, LegacyOppRow> {
  const out: Record<string, LegacyOppRow> = {};
  for (const entry of readdirSync(CHARS_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const file = join(CHARS_DIR, entry.name, "opponent-moves.yml");
    if (!existsSync(file)) continue;
    const doc = OpponentMoves.parse(parseYaml(readFileSync(file, "utf8")));
    for (const m of doc.moves) {
      const key = `${doc.character}|${m.input.notation}`;
      // Legacy value key order: lv, s, dmg, b, h, ch, note.
      out[key] = {
        lv: m.levels,
        s: m.frames.startup,
        dmg: m.damage,
        b: m.frames.block,
        h: m.frames.hit,
        ch: m.frames.ch,
        note: { en: m.note.en, de: m.note.de } as { en: string[]; de: string[] },
      };
    }
  }
  return out;
}
