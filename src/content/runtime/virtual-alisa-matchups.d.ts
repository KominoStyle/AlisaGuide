declare module "virtual:alisa-matchups" {
  interface MuRow {
    c: string;
    deep?: boolean;
    tag: { en: string; de: string };
    hurt: { en: string; de: string };
    duck: { en: string; de: string };
    punish: { en: string; de: string };
    plan: { en: string; de: string };
  }
  /** Curated matchup dossiers (legacy MU shape, exact order), assembled from content. */
  export const MU: MuRow[];
}
