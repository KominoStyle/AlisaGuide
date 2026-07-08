import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse as parseYaml } from "yaml";
import { Categories, ChainLabels, Warnings, MoveOrder } from "../schema/meta-tables";
import type { Category } from "../schema/meta-tables";
import type { LocalizedText } from "../schema/i18n";

/**
 * NODE-ONLY builder (uses `fs`). Reads + validates the small Alisa "move meta"
 * content files and returns the legacy-compatible objects the app expects:
 * `CATS` (ordered array), `CHAINLBL`/`WARN` (id -> localized), and `moveOrder`.
 *
 * Shared by the Vite plugin (client build) and the parity checker (`check.ts`).
 * Never imported by client/browser code, so `yaml`/`zod` stay out of the bundle.
 */

const BASE = join(process.cwd(), "content", "tekken8", "characters", "alisa");

function read(file: string): unknown {
  return parseYaml(readFileSync(join(BASE, file), "utf8"));
}

export interface AlisaMoveMeta {
  CATS: Category[];
  CHAINLBL: Record<string, LocalizedText>;
  WARN: Record<string, LocalizedText>;
  moveOrder: string[];
}

export function buildAlisaMoveMeta(): AlisaMoveMeta {
  const CATS = Categories.parse(read("categories.yml"));
  const CHAINLBL = ChainLabels.parse(read("chains.yml"));
  const WARN = Warnings.parse(read("warn.yml"));
  const moveOrder = MoveOrder.parse(read("move-order.yml"));
  return { CATS, CHAINLBL, WARN, moveOrder };
}
