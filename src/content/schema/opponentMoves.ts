import { z } from "zod";

/**
 * Curated opponent key-move frame data (legacy `OPP`), grouped per opponent
 * character. Rebuilt at build time into the legacy `"Char|move"`-keyed object.
 *
 * NOTE: `frames.ch` is a plain string (NOT nullable) because legacy `OPP` uses
 * an empty string `""` when there is no counterhit value — that must round-trip
 * exactly.
 */
export const OpponentNote = z.object({
  en: z.array(z.string()),
  de: z.array(z.string()),
});

export const OpponentFrames = z.object({
  startup: z.string(),
  block: z.string(),
  hit: z.string(),
  ch: z.string(),
});

export const OpponentMove = z.object({
  input: z.object({ notation: z.string() }),
  levels: z.string(),
  frames: OpponentFrames,
  damage: z.string(),
  note: OpponentNote,
});
export type OpponentMove = z.infer<typeof OpponentMove>;

export const OpponentMoves = z.object({
  character: z.string(),
  moves: z.array(OpponentMove).nonempty(),
});
export type OpponentMoves = z.infer<typeof OpponentMoves>;
