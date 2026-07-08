import { z } from "zod";
import { LocalizedText } from "./i18n";
import { Meta } from "./meta";

/**
 * A character-specific stance / state entity (e.g. Alisa's DES, BKP, SBT, DBT,
 * CLK). Stances are NOT global move categories — they belong to a character and
 * are referenced from moves via `MoveStance` (see `move.ts`).
 *
 * Schema only — no stance content is authored or migrated yet.
 */
export const Stance = z.object({
  id: z.string(),
  character: z.string(),
  /** Localized display name. */
  name: LocalizedText,
  /** Search aliases (e.g. "chainsaw", "Destructive Form"). */
  aliases: z.array(z.string()).default([]),
  meta: Meta,
});

export type Stance = z.infer<typeof Stance>;
