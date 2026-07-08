declare module "virtual:alisa-move-meta" {
  interface LocalizedText { en: string; de: string }
  /** Ordered move-list categories (id + localized heading), from content. */
  export const CATS: Array<{ id: string; name: LocalizedText }>;
  /** Chain-family labels, keyed by chain id, from content. */
  export const CHAINLBL: Record<string, LocalizedText>;
  /** Per-move warning notes, keyed by move id, from content. */
  export const WARN: Record<string, LocalizedText>;
}
