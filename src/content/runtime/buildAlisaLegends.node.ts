import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse as parseYaml } from "yaml";
import { Legends } from "../schema/legends";

/**
 * NODE-ONLY builder (uses `fs`). Reads + validates `legends.yml` and rebuilds the
 * four legacy-compatible legend exports, each an ordered array of
 * `[symbol, { en, de }]` tuples (exact legacy shape + order):
 *   LEG  — directions & buttons
 *   LEGP — situations & stances
 *   LEGF — reading the frame numbers
 *   LEGS — suffix letters
 *
 * Shared by the Vite plugin (client build) and the parity checker; never imported
 * by client/browser code so `yaml`/`zod` stay out of the bundle.
 */

export type LegendTuple = [string, { en: string; de: string }];

export interface LegacyLegends {
  LEG: LegendTuple[];
  LEGP: LegendTuple[];
  LEGF: LegendTuple[];
  LEGS: LegendTuple[];
}

const LEGENDS_FILE = join(process.cwd(), "content", "tekken8", "characters", "alisa", "legends.yml");

export function buildAlisaLegends(): LegacyLegends {
  const doc = Legends.parse(parseYaml(readFileSync(LEGENDS_FILE, "utf8")));
  const toTuples = (group: typeof doc.LEG): LegendTuple[] =>
    group.map((e) => [e.symbol, { en: e.text.en, de: e.text.de }] as LegendTuple);
  return {
    LEG: toTuples(doc.LEG),
    LEGP: toTuples(doc.LEGP),
    LEGF: toTuples(doc.LEGF),
    LEGS: toTuples(doc.LEGS),
  };
}
