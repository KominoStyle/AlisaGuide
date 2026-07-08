import { z } from "zod";
import { LocalizedText } from "./i18n";

/**
 * One combo — a flat mirror of a legacy `COMBOS` entry (`src/data/combos.ts`).
 * Fields and key order match legacy exactly (`name, from, seq, tIdx, note`);
 * routes/notation are copied verbatim and never normalized.
 */
export const Combo = z.object({
  /** Localized display name (legacy `name`). */
  name: LocalizedText,
  /** Where the combo starts from (legacy `from`). */
  from: z.string(),
  /** Ordered combo route (legacy `seq`). */
  seq: z.array(z.string()).nonempty(),
  /** Index into `seq` of the Tornado hit, or -1 for none (legacy `tIdx`). */
  tIdx: z.number().int(),
  /** Localized note (legacy `note`). */
  note: LocalizedText,
});

export type Combo = z.infer<typeof Combo>;

/** The ordered `combos.yml` array — reproduces legacy COMBOS order exactly. */
export const Combos = z.array(Combo).nonempty();

export type Combos = z.infer<typeof Combos>;
