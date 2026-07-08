import { parse as parseYaml } from "yaml";
import { Move } from "./schema/move";
import { Combos } from "./schema/combo";
import { Matchup } from "./schema/matchup";
import { Training } from "./schema/training";

/**
 * Pure parse + validate helpers. They take a raw file string and return a
 * schema-validated object, so they can be reused by both the Vite loader
 * (browser/build) and the Node checker (`content:check`). No filesystem, no
 * Vite-specific APIs here.
 */

export function parseMove(raw: string): Move {
  return Move.parse(parseYaml(raw));
}

export function parseCombos(raw: string): Combos {
  return Combos.parse(parseYaml(raw));
}

export function parseMatchup(raw: string): Matchup {
  return Matchup.parse(parseYaml(raw));
}

/** Split a Markdown file into its YAML frontmatter data and the Markdown body. */
export function splitFrontmatter(raw: string): { data: unknown; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error("Markdown file is missing a `---` YAML frontmatter block");
  }
  return { data: parseYaml(match[1]), body: match[2] };
}

export function parseTraining(raw: string): { data: Training; body: string } {
  const { data, body } = splitFrontmatter(raw);
  return { data: Training.parse(data), body };
}
