import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse as parseYaml } from "yaml";
import { Matchup, MatchupOrder } from "../schema/matchup";

/**
 * NODE-ONLY builder (uses `fs`). Reads `_order.yml` + every per-matchup
 * `<slug>.yml`, validates each with the Matchup schema, and rebuilds the
 * legacy-compatible `MU` array in the exact legacy order:
 *   c    <- character
 *   deep <- deep          (emitted ONLY when true, to mirror legacy key sets)
 *   tag/hurt/duck/punish/plan <- verbatim localized prose
 *
 * FD-derived `muDerive()` suggestions are intentionally NOT included — those stay
 * a pure runtime computation over FD. Shared by the Vite plugin (client build)
 * and the parity checker; never imported by client/browser code so `yaml`/`zod`
 * stay out of the bundle.
 */

export interface LegacyMuRow {
  c: string;
  deep?: boolean;
  tag: { en: string; de: string };
  hurt: { en: string; de: string };
  duck: { en: string; de: string };
  punish: { en: string; de: string };
  plan: { en: string; de: string };
}

const MATCHUPS_DIR = join(process.cwd(), "content", "tekken8", "characters", "alisa", "matchups");

export function buildAlisaMatchups(): LegacyMuRow[] {
  const order = MatchupOrder.parse(parseYaml(readFileSync(join(MATCHUPS_DIR, "_order.yml"), "utf8")));
  return order.map((slug) => {
    const doc = Matchup.parse(parseYaml(readFileSync(join(MATCHUPS_DIR, `${slug}.yml`), "utf8")));
    // Legacy row key order: c, (deep), tag, hurt, duck, punish, plan. `deep` is
    // present only for deep matchups in legacy, so we omit it when false.
    const row: LegacyMuRow = {
      c: doc.character,
      ...(doc.deep ? { deep: true } : {}),
      tag: doc.tag,
      hurt: doc.hurt,
      duck: doc.duck,
      punish: doc.punish,
      plan: doc.plan,
    };
    return row;
  });
}
