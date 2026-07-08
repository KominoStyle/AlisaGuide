import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse as parseYaml } from "yaml";
import { Combos } from "../schema/combo";

/**
 * NODE-ONLY builder (uses `fs`). Reads + validates the ordered `combos.yml`
 * array and rebuilds the legacy-compatible `COMBOS` array in exact order and
 * shape:
 *   { name, from, seq, tIdx, note }   (legacy field order; routes verbatim)
 *
 * Shared by the Vite plugin (client build) and the parity checker; never imported
 * by client/browser code so `yaml`/`zod` stay out of the bundle.
 */

export interface LegacyComboRow {
  name: { en: string; de: string };
  from: string;
  seq: string[];
  tIdx: number;
  note: { en: string; de: string };
}

const COMBOS_FILE = join(process.cwd(), "content", "tekken8", "characters", "alisa", "combos", "combos.yml");

export function buildAlisaCombos(): LegacyComboRow[] {
  const docs = Combos.parse(parseYaml(readFileSync(COMBOS_FILE, "utf8")));
  // Rebuild with legacy key order: name, from, seq, tIdx, note.
  return docs.map((c) => ({
    name: c.name,
    from: c.from,
    seq: [...c.seq],
    tIdx: c.tIdx,
    note: c.note,
  }));
}
