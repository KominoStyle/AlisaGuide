import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse as parseYaml } from "yaml";
import { KnowledgeChecksDoc, type KnowledgeCheck, type FrameTrap } from "../schema/knowledgeChecks";
import { buildAlisaMoves } from "./buildMoves.node";

/**
 * NODE-ONLY builder (uses `fs`). Reads + validates `knowledge-checks.yml`,
 * verifies that every `moves[]` id and `sequence[].move` resolves to an
 * existing MOVES id, and returns the plain `{ checks, traps }` arrays. Shared
 * by the Vite plugin (client build) and `content:check`. Never imported by
 * client/browser code, so `yaml`/`zod` stay out of the bundle.
 */

export const KNOWLEDGE_CHECKS_FILE = join(
  process.cwd(),
  "content",
  "tekken8",
  "characters",
  "alisa",
  "knowledge-checks.yml",
);

export function buildAlisaKnowledgeChecks(): { checks: KnowledgeCheck[]; traps: FrameTrap[] } {
  const doc = KnowledgeChecksDoc.parse(parseYaml(readFileSync(KNOWLEDGE_CHECKS_FILE, "utf8")));
  const { moves } = buildAlisaMoves();
  const missing: string[] = [];
  for (const c of doc.knowledgeChecks) {
    for (const id of c.moves) {
      if (!(id in moves)) missing.push(`${c.id}: "${id}"`);
    }
  }
  for (const t of doc.frameTraps ?? []) {
    for (const ref of t.sequence) {
      if (!(ref.move in moves)) missing.push(`${t.id}: "${ref.move}"`);
    }
  }
  if (missing.length) {
    throw new Error(`knowledge-check move ref(s) not found in MOVES: ${missing.join(", ")}`);
  }
  return { checks: [...doc.knowledgeChecks], traps: [...(doc.frameTraps ?? [])] };
}
