declare module "virtual:alisa-opponents" {
  interface OppRow {
    lv: string;
    s: string;
    dmg: string;
    b: string;
    h: string;
    ch: string;
    note: { en: string[]; de: string[] };
  }
  /** Curated opponent frame data, keyed `"Char|move"` (legacy OPP shape), from content. */
  export const OPP: Record<string, OppRow>;
}
