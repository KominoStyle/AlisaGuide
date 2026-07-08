declare module "virtual:alisa-punish" {
  interface LocalizedText { en: string; de: string }
  /** Alisa punish cheatsheet (legacy shape: dis/use/why), from content. */
  export const PUNISH: Array<{ dis: string; use: string; why: LocalizedText }>;
}
