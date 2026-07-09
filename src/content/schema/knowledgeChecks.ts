import { z } from "zod";
import { LocalizedText } from "./i18n";

/**
 * Knowledge checks + frame traps (Phase 6): one file at
 * `content/tekken8/characters/alisa/knowledge-checks.yml`. Every move id in
 * `moves`/`sequence` must be an existing MOVES id (enforced by the builder +
 * `content:check`); every stated frame/property fact must come from our own
 * canonical move YAML / FD. TekkenDocs-only claims must carry
 * `reviewStatus: 'needsLabReview'` plus a `sourceNote`, or be omitted.
 */

export const KcReviewStatus = z.enum(["verified", "needsLabReview"]);
export type KcReviewStatus = z.infer<typeof KcReviewStatus>;

/** Optional external provenance (Phase 9). `manual-review` links are shown with */
/** the manual-review badge and are never treated as canonical confirmation. */
export const KcSourceLink = z
  .object({
    label: z.string().min(1),
    url: z.string().min(1),
    lastChecked: z.string().optional(),
    reviewStatus: z.enum(["manual-review", "verified"]).optional(),
  })
  .strict();
export type KcSourceLink = z.infer<typeof KcSourceLink>;

/** An anti-Alisa knowledge check: the string(s) + the practical answer. */
export const KnowledgeCheck = z
  .object({
    id: z.string().min(1),
    title: LocalizedText,
    moves: z.array(z.string().min(1)).nonempty(),
    answer: LocalizedText,
    risk: LocalizedText.optional(),
    explanation: LocalizedText.optional(),
    drill: LocalizedText.optional(),
    sourceNote: LocalizedText.optional(),
    sourceLinks: z.array(KcSourceLink).nonempty().optional(),
    reviewStatus: KcReviewStatus,
  })
  .strict();
export type KnowledgeCheck = z.infer<typeof KnowledgeCheck>;

/** A frame-trap sequence (two or more move refs in order). */
export const FrameTrap = z
  .object({
    id: z.string().min(1),
    title: LocalizedText,
    sequence: z.array(z.object({ move: z.string().min(1) }).strict()).min(2),
    answer: LocalizedText,
    risk: LocalizedText.optional(),
    explanation: LocalizedText.optional(),
    drill: LocalizedText.optional(),
    sourceNote: LocalizedText.optional(),
    sourceLinks: z.array(KcSourceLink).nonempty().optional(),
    reviewStatus: KcReviewStatus,
  })
  .strict();
export type FrameTrap = z.infer<typeof FrameTrap>;

export const KnowledgeChecksDoc = z
  .object({
    knowledgeChecks: z.array(KnowledgeCheck).nonempty(),
    frameTraps: z.array(FrameTrap).nonempty().optional(),
  })
  .strict();
export type KnowledgeChecksDoc = z.infer<typeof KnowledgeChecksDoc>;
