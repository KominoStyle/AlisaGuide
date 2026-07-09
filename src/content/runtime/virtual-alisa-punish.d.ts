declare module "virtual:alisa-punish" {
  interface LocalizedText { en: string; de: string }
  interface PunishRow {
    /** Legacy `dis` (opponent's disadvantage; "—" for whiff rows). */
    dis: string;
    /** Legacy `use` (Alisa move notation). */
    use: string;
    kind: "standing" | "crouching" | "whiff";
    startup?: string;
    alt?: boolean;
    followUps?: LocalizedText[];
    reviewStatus?: "verified" | "needsLabReview";
    /** Optional external provenance (Phase 9); each link is `manual-review`. */
    sourceLinks?: Array<{ label: string; url: string; lastChecked?: string; reviewStatus?: "manual-review" | "verified" }>;
    /** Legacy `why`. */
    why: LocalizedText;
  }
  /** Canonical punish table (grouped by `kind` at render time), from content. */
  export const PUNISH: PunishRow[];
  /** Manual-review candidates (TekkenDocs v3.00) — rendered only clearly labelled. */
  export const PUNISH_REVIEW: PunishRow[];
}
