import { z } from "zod";

/**
 * Localized text. `en` and `de` are required today; the object is intentionally
 * open to more languages later (e.g. add `ja`) without breaking existing content.
 */
export const LocalizedText = z.object({
  en: z.string(),
  de: z.string(),
});

export type LocalizedText = z.infer<typeof LocalizedText>;
