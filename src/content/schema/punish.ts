import { z } from "zod";
import { LocalizedText } from "./i18n";

/**
 * Alisa punish cheatsheet (v2): one row per situation, grouped by `kind`
 * (standing / crouching / whiff) at render time; array order = display order
 * within each kind. `disadvantage`/`use`/`why` keep their legacy meaning
 * (`dis`/`use`/`why` at runtime).
 */
export const PunishRow = z.object({
  /** Opponent's disadvantage, e.g. "-10" or "-11 (low)"; "—" for whiff rows (legacy `dis`). */
  disadvantage: z.string(),
  /** Alisa move notation to punish with, e.g. "uf+4,4" (legacy `use`). */
  use: z.string(),
  /** Which punish table the row belongs to. */
  kind: z.enum(["standing", "crouching", "whiff"]),
  /** Startup of the punish, e.g. "i13" — only when canonical in our content. */
  startup: z.string().optional(),
  /** Marks an alternative option for a bucket already covered by a primary row. */
  alt: z.boolean().optional(),
  /** Localized follow-up notes (canonical facts only, e.g. stance transitions). */
  followUps: z.array(LocalizedText).nonempty().optional(),
  /** Review state. Canonical rows are verified (default, field usually omitted); */
  /** `needsLabReview` rows live only in punish-review.yml. */
  reviewStatus: z.enum(["verified", "needsLabReview"]).optional(),
  /** Localized reason (legacy `why`). */
  why: LocalizedText,
});
export type PunishRow = z.infer<typeof PunishRow>;

/** The ordered canonical punish table (punish.yml). */
export const Punish = z.array(PunishRow).nonempty();
export type Punish = z.infer<typeof Punish>;

/** Manual-review candidates (punish-review.yml) — same row shape, never canonical. */
export const PunishReview = z.array(PunishRow).nonempty();
export type PunishReview = z.infer<typeof PunishReview>;
