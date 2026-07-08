declare module "virtual:alisa-combos" {
  interface ComboRow {
    name: { en: string; de: string };
    from: string;
    seq: string[];
    tIdx: number;
    note: { en: string; de: string };
  }
  /** Combo cheatsheet (legacy COMBOS shape, exact order), assembled from content. */
  export const COMBOS: ComboRow[];
}
