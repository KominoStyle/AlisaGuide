declare module "virtual:alisa-moves" {
  /** Legacy-compatible Alisa MOVES, assembled from YAML content at build time. */
  export const MOVES: Record<string, Record<string, unknown>>;
}
