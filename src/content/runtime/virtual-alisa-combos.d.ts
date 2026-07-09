declare module "virtual:alisa-combos" {
  interface ComboRow {
    name: { en: string; de: string };
    from: string;
    seq: string[];
    tIdx: number;
    note: { en: string; de: string };
    // v2 optional metadata (present only when authored in combos.yml)
    category?: "staple" | "beginner" | "ender" | "wall" | "small";
    starters?: string[];
    difficulty?: 1 | 2 | 3;
    damage?: number;
    wallCarry?: boolean;
    breaks?: Array<"wall" | "floor" | "balcony">;
    heatRequired?: boolean;
    rageRequired?: boolean;
    sourceLink?: string;
    reviewStatus?: "verified" | "needsLabReview";
  }
  /** Combo cheatsheet (canonical order preserved; grouping is render-time only). */
  export const COMBOS: ComboRow[];
}
