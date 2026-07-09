declare module "virtual:alisa-matchups" {
  interface LT { en: string; de: string }
  type MuReviewStatus = "verified" | "needsLabReview";
  interface MuRow {
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
  /** Curated matchup dossiers (legacy MU shape + optional v2 fields, exact order). */
  export const MU: MuRow[];
}
