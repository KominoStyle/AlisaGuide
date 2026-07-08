import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse as parseYaml } from "yaml";
import { Punish } from "../schema/punish";
import type { LocalizedText } from "../schema/i18n";

/**
 * NODE-ONLY builder (uses `fs`). Reads + validates the Alisa punish content and
 * returns the legacy-compatible `PUNISH` array (`dis`/`use`/`why`), preserving
 * row order. Shared by the Vite plugin (client build) and the parity checker.
 * Never imported by client/browser code, so `yaml`/`zod` stay out of the bundle.
 */

export interface LegacyPunishRow {
  dis: string;
  use: string;
  why: LocalizedText;
}

export function buildAlisaPunish(): LegacyPunishRow[] {
  const file = join(process.cwd(), "content", "tekken8", "characters", "alisa", "punish.yml");
  const rows = Punish.parse(parseYaml(readFileSync(file, "utf8")));
  return rows.map((r) => ({ dis: r.disadvantage, use: r.use, why: r.why }));
}
