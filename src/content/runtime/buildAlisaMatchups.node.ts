import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse as parseYaml } from "yaml";
import { Matchup, MatchupOrder } from "../schema/matchup";

/**
 * NODE-ONLY builder (uses `fs`). Reads `_order.yml` + every per-matchup
 * `<slug>.yml`, validates each with the Matchup schema, and rebuilds the
 * legacy-compatible `MU` array in the exact legacy order:
 *   c    <- character
 *   deep <- deep          (emitted ONLY when true, to mirror legacy key sets)
 *   tag/hurt/duck/punish/plan <- verbatim localized prose
 * plus the OPTIONAL MU v2 fields (Phase 5) passed through only when authored.
 *
 * FD-derived `muDerive()` suggestions are intentionally NOT included — those stay
 * a pure runtime computation over FD. Shared by the Vite plugin (client build)
 * and the checker; never imported by client/browser code so `yaml`/`zod` stay
 * out of the bundle.
 */

interface LT {
  en: string;
  de: string;
}

type MuReviewStatus = "verified" | "needsLabReview";

export interface LegacyMuRow {
  c: string;
  deep?: boolean;
  tag: LT;
  hurt: LT;
  duck: LT;
  punish: LT;
  plan: LT;
  // v2 optional fields (present only when authored)
  lastReviewed?: string;
  opponentGameplan?: LT;
  keyThreats?: LT[];
  interruptWindows?: LT[];
  stanceInteraction?: LT[];
  heatThreats?: LT[];
  rageThreats?: LT[];
  alisaAnswers?: LT[];
  knowledgeChecks?: LT[];
  antiKnowledgeChecks?: LT[];
  drills?: LT[];
  punishThese?: Array<{ move?: string; notation?: string; onBlock?: string; with?: string; note: LT; reviewStatus?: MuReviewStatus }>;
  duckTargets?: Array<{ string: string; hit?: string; punish?: string; note: LT; reviewStatus?: MuReviewStatus }>;
  stepDirection?: { direction: string; note: LT; reviewStatus?: MuReviewStatus };
  sourceLinks?: Array<{ label: string; url: string; lastChecked?: string; reviewStatus?: "manual-review" | "verified" }>;
}

const MATCHUPS_DIR = join(process.cwd(), "content", "tekken8", "characters", "alisa", "matchups");

export function buildAlisaMatchups(): LegacyMuRow[] {
  const order = MatchupOrder.parse(parseYaml(readFileSync(join(MATCHUPS_DIR, "_order.yml"), "utf8")));
  return order.map((slug) => {
    const doc = Matchup.parse(parseYaml(readFileSync(join(MATCHUPS_DIR, `${slug}.yml`), "utf8")));
    // Legacy row key order: c, (deep), tag, hurt, duck, punish, plan. `deep` is
    // present only for deep matchups in legacy, so we omit it when false. The v2
    // optionals follow, each emitted only when authored.
    const row: LegacyMuRow = {
      c: doc.character,
      ...(doc.deep ? { deep: true } : {}),
      tag: doc.tag,
      hurt: doc.hurt,
      duck: doc.duck,
      punish: doc.punish,
      plan: doc.plan,
      ...(doc.lastReviewed !== undefined ? { lastReviewed: doc.lastReviewed } : {}),
      ...(doc.opponentGameplan !== undefined ? { opponentGameplan: doc.opponentGameplan } : {}),
      ...(doc.keyThreats !== undefined ? { keyThreats: [...doc.keyThreats] } : {}),
      ...(doc.interruptWindows !== undefined ? { interruptWindows: [...doc.interruptWindows] } : {}),
      ...(doc.stanceInteraction !== undefined ? { stanceInteraction: [...doc.stanceInteraction] } : {}),
      ...(doc.heatThreats !== undefined ? { heatThreats: [...doc.heatThreats] } : {}),
      ...(doc.rageThreats !== undefined ? { rageThreats: [...doc.rageThreats] } : {}),
      ...(doc.alisaAnswers !== undefined ? { alisaAnswers: [...doc.alisaAnswers] } : {}),
      ...(doc.knowledgeChecks !== undefined ? { knowledgeChecks: [...doc.knowledgeChecks] } : {}),
      ...(doc.antiKnowledgeChecks !== undefined ? { antiKnowledgeChecks: [...doc.antiKnowledgeChecks] } : {}),
      ...(doc.drills !== undefined ? { drills: [...doc.drills] } : {}),
      ...(doc.punishThese !== undefined ? { punishThese: [...doc.punishThese] } : {}),
      ...(doc.duckTargets !== undefined ? { duckTargets: [...doc.duckTargets] } : {}),
      ...(doc.stepDirection !== undefined ? { stepDirection: doc.stepDirection } : {}),
      ...(doc.sourceLinks !== undefined ? { sourceLinks: [...doc.sourceLinks] } : {}),
    };
    return row;
  });
}
