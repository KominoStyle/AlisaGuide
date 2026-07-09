import { z } from "zod";
import { LocalizedText } from "./i18n";

/**
 * One curated matchup dossier — a flat mirror of a legacy `MU` row
 * (`src/data/matchups.ts`). The five legacy text fields are copied verbatim from
 * legacy; no text is rewritten and no FD-derived `muDerive()` suggestions are
 * baked in here (the runtime still generates those from FD at render time).
 *
 * MU v2 (Phase 5) adds OPTIONAL structured fields — no matchup file is required
 * to use them; all 41 legacy-shaped files stay valid unchanged. Facts in v2
 * fields must come from our own canonical content; unverified claims carry
 * `reviewStatus: 'needsLabReview'` (or 'manual-review' for source links).
 */

const MuReviewStatus = z.enum(["verified", "needsLabReview"]);

export const Matchup = z.object({
  /** Opponent display name, exactly as in legacy (`c`), e.g. "Lili", "Jack 8". */
  character: z.string(),
  /** Whether this matchup has the deep-dive treatment (legacy `deep`). */
  deep: z.boolean(),
  tag: LocalizedText,
  hurt: LocalizedText,
  duck: LocalizedText,
  punish: LocalizedText,
  plan: LocalizedText,
  // ---- v2 optional fields ------------------------------------------------
  /** Date of the last content review, `YYYY-MM-DD`. */
  lastReviewed: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  opponentGameplan: LocalizedText.optional(),
  keyThreats: z.array(LocalizedText).nonempty().optional(),
  interruptWindows: z.array(LocalizedText).nonempty().optional(),
  stanceInteraction: z.array(LocalizedText).nonempty().optional(),
  heatThreats: z.array(LocalizedText).nonempty().optional(),
  rageThreats: z.array(LocalizedText).nonempty().optional(),
  alisaAnswers: z.array(LocalizedText).nonempty().optional(),
  knowledgeChecks: z.array(LocalizedText).nonempty().optional(),
  antiKnowledgeChecks: z.array(LocalizedText).nonempty().optional(),
  drills: z.array(LocalizedText).nonempty().optional(),
  /** Concrete punishable moves: ours by id (`move`) or theirs by `notation`. */
  punishThese: z
    .array(
      z.object({
        move: z.string().optional(),
        notation: z.string().optional(),
        onBlock: z.string().optional(),
        with: z.string().optional(),
        note: LocalizedText,
        reviewStatus: MuReviewStatus.optional(),
      }),
    )
    .nonempty()
    .optional(),
  /** Opponent strings with a duckable hit. */
  duckTargets: z
    .array(
      z.object({
        string: z.string(),
        hit: z.string().optional(),
        punish: z.string().optional(),
        note: LocalizedText,
        reviewStatus: MuReviewStatus.optional(),
      }),
    )
    .nonempty()
    .optional(),
  stepDirection: z
    .object({
      direction: z.string(),
      note: LocalizedText,
      reviewStatus: MuReviewStatus.optional(),
    })
    .optional(),
  sourceLinks: z
    .array(
      z.object({
        label: z.string().min(1),
        url: z.string().min(1),
        lastChecked: z.string().optional(),
        reviewStatus: z.enum(["manual-review", "verified"]).optional(),
      }),
    )
    .nonempty()
    .optional(),
});

export type Matchup = z.infer<typeof Matchup>;

/**
 * `_order.yml` — the slug order that reproduces the legacy MU array order
 * exactly. One entry per matchup file (`<slug>.yml`).
 */
export const MatchupOrder = z.array(z.string()).nonempty();

export type MatchupOrder = z.infer<typeof MatchupOrder>;
