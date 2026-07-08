import { z } from "zod";
import { LocalizedText } from "./i18n";

/**
 * One curated matchup dossier — a flat mirror of a legacy `MU` row
 * (`src/data/matchups.ts`). Every field is copied verbatim from legacy; no text
 * is rewritten and no FD-derived `muDerive()` suggestions are baked in here (the
 * runtime still generates those from FD at render time).
 */
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
});

export type Matchup = z.infer<typeof Matchup>;

/**
 * `_order.yml` — the slug order that reproduces the legacy MU array order
 * exactly. One entry per matchup file (`<slug>.yml`).
 */
export const MatchupOrder = z.array(z.string()).nonempty();

export type MatchupOrder = z.infer<typeof MatchupOrder>;
