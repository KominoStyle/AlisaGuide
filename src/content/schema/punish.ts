import { z } from "zod";
import { LocalizedText } from "./i18n";

/**
 * Alisa punish cheatsheet: one row per frame-disadvantage bucket, in display
 * order. Mirrors the legacy `PUNISH` array (`dis`/`use`/`why`).
 */
export const PunishRow = z.object({
  /** Opponent's disadvantage, e.g. "-10" or "-11 (low)" (legacy `dis`). */
  disadvantage: z.string(),
  /** Alisa move notation to punish with, e.g. "uf+4,4" (legacy `use`). */
  use: z.string(),
  /** Localized reason (legacy `why`). */
  why: LocalizedText,
});
export type PunishRow = z.infer<typeof PunishRow>;

/** The ordered punish table (order = display order). */
export const Punish = z.array(PunishRow).nonempty();
export type Punish = z.infer<typeof Punish>;
