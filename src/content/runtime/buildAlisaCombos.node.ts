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
  // v2 optional metadata (present only when authored in combos.yml)
  category?: "staple" | "beginner" | "ender" | "wall" | "small";
  starters?: string[];
  difficulty?: 1 | 2 | 3;
  damage?: number;
  wallCarry?: boolean;
  breaks?: Array<"wall" | "floor" | "balcony">;
  heatRequired?: boolean;
  rageRequired?: boolean;
  sourceLink?: string;
  reviewStatus?: "verified" | "needsLabReview";
}

const COMBOS_FILE = join(process.cwd(), "content", "tekken8", "characters", "alisa", "combos", "combos.yml");

export function buildAlisaCombos(): LegacyComboRow[] {
  const docs = Combos.parse(parseYaml(readFileSync(COMBOS_FILE, "utf8")));
  // Rebuild with legacy key order first (name, from, seq, tIdx, note), then the
  // optional v2 metadata only when authored.
  return docs.map((c) => ({
    name: c.name,
    from: c.from,
    seq: [...c.seq],
    tIdx: c.tIdx,
    note: c.note,
    ...(c.category !== undefined ? { category: c.category } : {}),
    ...(c.starters !== undefined ? { starters: [...c.starters] } : {}),
    ...(c.difficulty !== undefined ? { difficulty: c.difficulty as 1 | 2 | 3 } : {}),
    ...(c.damage !== undefined ? { damage: c.damage } : {}),
    ...(c.wallCarry !== undefined ? { wallCarry: c.wallCarry } : {}),
    ...(c.breaks !== undefined ? { breaks: [...c.breaks] } : {}),
    ...(c.heatRequired !== undefined ? { heatRequired: c.heatRequired } : {}),
    ...(c.rageRequired !== undefined ? { rageRequired: c.rageRequired } : {}),
    ...(c.sourceLink !== undefined ? { sourceLink: c.sourceLink } : {}),
    ...(c.reviewStatus !== undefined ? { reviewStatus: c.reviewStatus } : {}),
  }));
}
