declare module "virtual:alisa-stances" {
  interface LocalizedText { en: string; de: string }
  interface StanceMoveRef { move: string; note?: LocalizedText }
  interface StanceKeyOption { move: string; role: LocalizedText }
  interface StanceTransition { to: "DES" | "SBT" | "DBT" | "BKP"; via: string; note?: LocalizedText }
  interface StanceDef {
    id: "des" | "sbt" | "dbt" | "bkp";
    label: LocalizedText;
    short: LocalizedText;
    purpose: LocalizedText;
    commonEntries?: StanceMoveRef[];
    keyOptions: StanceKeyOption[];
    safeOptions?: StanceMoveRef[];
    riskyOptions?: StanceMoveRef[];
    lows?: StanceMoveRef[];
    mids?: StanceMoveRef[];
    exits?: LocalizedText[];
    transitions?: StanceTransition[];
    counterplay: LocalizedText;
    trainingDrills: LocalizedText[];
    manualReview?: LocalizedText[];
  }
  /** Stance guide cards in fixed display order: DES, SBT, DBT, BKP. */
  export const STANCES: StanceDef[];
}
