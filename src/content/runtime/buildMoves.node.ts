import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { parseMove } from "../parse";
import { deriveLegacyCat, toLegacyRecord } from "./toLegacy";
import { buildAlisaMoveMeta } from "./buildAlisaMoveMeta.node";

/**
 * NODE-ONLY builder (uses `fs`). Reads + validates the Alisa move YAML and
 * assembles the legacy-compatible `MOVES` object in legacy insertion order.
 *
 * Shared by the Vite plugin (`vitePlugin.ts`, build/dev) and the parity checker
 * (`check.ts`, tsx). It must NEVER be imported by client/browser code — that is
 * how `yaml`/`zod`/raw YAML stay out of the shipped bundle.
 */

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name.endsWith(".yml")) out.push(full);
  }
  return out;
}

export function buildAlisaMoves(): {
  moves: Record<string, Record<string, unknown>>;
  files: string[];
} {
  const base = join(process.cwd(), "content", "tekken8", "characters", "alisa", "moves");
  const files = walk(base);

  // Display order now comes from content (move-order.yml), not legacy moves.ts.
  const order: Record<string, number> = {};
  buildAlisaMoveMeta().moveOrder.forEach((id, i) => { order[id] = i; });

  const built = files.map((file) => {
    const move = parseMove(readFileSync(file, "utf8"));
    const cat = deriveLegacyCat(move, file.replace(/\\/g, "/"));
    return { id: move.id, record: toLegacyRecord(move, cat), order: order[move.id] ?? Number.MAX_SAFE_INTEGER };
  });
  // Preserve the exact move-list order so the default (unsorted) view is unchanged.
  built.sort((a, b) => a.order - b.order);

  const moves: Record<string, Record<string, unknown>> = {};
  for (const b of built) moves[b.id] = b.record;
  return { moves, files };
}
