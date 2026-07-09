import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { parse as parseYaml } from "yaml";
import { Punish, PunishReview, type PunishRow } from "../schema/punish";
import type { LocalizedText } from "../schema/i18n";

/**
 * NODE-ONLY builder (uses `fs`). Reads + validates the Alisa punish content and
 * returns the punish tables: `rows` (canonical, legacy-compatible `dis`/`use`/`why`
 * plus the v2 `kind`/`startup`/`alt`/`followUps` fields, order preserved) and
 * `review` (punish-review.yml manual-review candidates, never canonical advice).
 * Shared by the Vite plugin (client build) and the checker. Never imported by
 * client/browser code, so `yaml`/`zod` stay out of the bundle.
 */

export interface LegacyPunishRow {
  dis: string;
  use: string;
  kind: "standing" | "crouching" | "whiff";
  startup?: string;
  alt?: boolean;
  followUps?: LocalizedText[];
  reviewStatus?: "verified" | "needsLabReview";
  why: LocalizedText;
}

export interface PunishTables {
  rows: LegacyPunishRow[];
  review: LegacyPunishRow[];
}

const ALISA_DIR = join(process.cwd(), "content", "tekken8", "characters", "alisa");

function toRow(r: PunishRow): LegacyPunishRow {
  return {
    dis: r.disadvantage,
    use: r.use,
    kind: r.kind,
    ...(r.startup !== undefined ? { startup: r.startup } : {}),
    ...(r.alt !== undefined ? { alt: r.alt } : {}),
    ...(r.followUps !== undefined ? { followUps: [...r.followUps] } : {}),
    ...(r.reviewStatus !== undefined ? { reviewStatus: r.reviewStatus } : {}),
    why: r.why,
  };
}

export function buildAlisaPunish(): PunishTables {
  const rows = Punish.parse(parseYaml(readFileSync(join(ALISA_DIR, "punish.yml"), "utf8"))).map(toRow);
  const reviewFile = join(ALISA_DIR, "punish-review.yml");
  const review = existsSync(reviewFile)
    ? PunishReview.parse(parseYaml(readFileSync(reviewFile, "utf8"))).map(toRow)
    : [];
  return { rows, review };
}
