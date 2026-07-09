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
  // ---- v2 optional metadata (render-time grouping/badges; array order stays canonical) ----
  /** Display/grouping category. */
  category: z.enum(["staple", "beginner", "ender", "wall", "small"]).optional(),
  /** Optional launcher/starter move notations. */
  starters: z.array(z.string()).nonempty().optional(),
  /** 1 = easy … 3 = hard. */
  difficulty: z.number().int().min(1).max(3).optional(),
  /** Approximate damage — only when already stated in canonical content or lab-measured. */
  damage: z.number().positive().optional(),
  /** Carries far toward the wall. */
  wallCarry: z.boolean().optional(),
  /** Stage-break interactions of the route. */
  breaks: z.array(z.enum(["wall", "floor", "balcony"])).nonempty().optional(),
  /** Requires Heat / Rage. */
  heatRequired: z.boolean().optional(),
  rageRequired: z.boolean().optional(),
  /** External reference for the route (never an auto-import source). */
  sourceLink: z.string().optional(),
  /** `needsLabReview` marks entries not yet verified on the current patch. */
  reviewStatus: z.enum(["verified", "needsLabReview"]).optional(),
});

export type Combo = z.infer<typeof Combo>;

/** The ordered `combos.yml` array — reproduces legacy COMBOS order exactly. */
export const Combos = z.array(Combo).nonempty();

export type Combos = z.infer<typeof Combos>;
