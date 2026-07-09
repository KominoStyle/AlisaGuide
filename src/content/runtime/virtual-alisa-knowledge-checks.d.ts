declare module "virtual:alisa-knowledge-checks" {
  interface LocalizedText { en: string; de: string }
  type KcReviewStatus = "verified" | "needsLabReview";
  interface KcSourceLink { label: string; url: string; lastChecked?: string; reviewStatus?: "manual-review" | "verified" }
  interface KnowledgeCheck {
    id: string;
    title: LocalizedText;
    moves: string[];
    answer: LocalizedText;
    risk?: LocalizedText;
    explanation?: LocalizedText;
    drill?: LocalizedText;
    sourceNote?: LocalizedText;
    sourceLinks?: KcSourceLink[];
    reviewStatus: KcReviewStatus;
  }
  interface FrameTrap {
    id: string;
    title: LocalizedText;
    sequence: Array<{ move: string }>;
    answer: LocalizedText;
    risk?: LocalizedText;
    explanation?: LocalizedText;
    drill?: LocalizedText;
    sourceNote?: LocalizedText;
    sourceLinks?: KcSourceLink[];
    reviewStatus: KcReviewStatus;
  }
  /** Anti-Alisa knowledge checks (structured strings + practical answers). */
  export const KNOWLEDGE_CHECKS: KnowledgeCheck[];
  /** Frame-trap sequences; needsLabReview items carry a visible sourceNote. */
  export const FRAME_TRAPS: FrameTrap[];
}
