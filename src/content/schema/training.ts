import { z } from "zod";
import { LocalizedText } from "./i18n";
import { Meta } from "./meta";

export const TrainingType = z.enum(["movement", "combo", "punish", "drill"]);

export type TrainingType = z.infer<typeof TrainingType>;

/**
 * A training drill. Authored as Markdown-with-frontmatter: these are the
 * frontmatter fields; the Markdown body is kept separately as long-form notes.
 */
export const Training = z.object({
  id: z.string(),
  character: z.string(),
  type: TrainingType,
  /** Target input sequence if known (e.g. ["b","db","n","b"]); `null` otherwise. */
  targetSequence: z.array(z.string()).nullable(),
  /** Localized explanation. */
  explanation: LocalizedText,
  meta: Meta,
});

export type Training = z.infer<typeof Training>;
