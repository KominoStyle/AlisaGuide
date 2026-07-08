/**
 * Frame data (FD) is a GENERATED positional blob, not hand-authored content, so
 * it is validated with a small explicit function rather than a decoded Zod model
 * — the tuple stays positional (`[lv, s, dmg, b, h, ch, tags?]`) and is never
 * decomposed into objects. Node-only (used by the builder + parity checker).
 */

/** A positional frame-data row: 6 strings, optionally a 7th tags string-array. */
export type FrameRow =
  | [string, string, string, string, string, string]
  | [string, string, string, string, string, string, string[]];

/** `Record<CharacterName, Record<MoveNotation, FrameRow>>` — exact legacy shape. */
export type FrameData = Record<string, Record<string, FrameRow>>;

/**
 * Validate the generated FD asset WITHOUT changing its shape. Throws a
 * descriptive error on any violation; returns the same object typed as FrameData.
 */
export function validateFrameData(data: unknown): FrameData {
  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    throw new Error("frame-data: top-level value must be an object");
  }
  const fd = data as Record<string, unknown>;
  const chars = Object.keys(fd);
  if (chars.length === 0) throw new Error("frame-data: contains no characters");

  for (const c of chars) {
    if (c.trim() === "") throw new Error("frame-data: empty character key");
    const table = fd[c];
    if (typeof table !== "object" || table === null || Array.isArray(table)) {
      throw new Error(`frame-data: "${c}" table is not an object`);
    }
    const moves = Object.keys(table as Record<string, unknown>);
    if (moves.length === 0) throw new Error(`frame-data: "${c}" has an empty move table`);

    for (const mv of moves) {
      if (mv.trim() === "") throw new Error(`frame-data: "${c}" has an empty move key`);
      const row = (table as Record<string, unknown>)[mv];
      if (!Array.isArray(row) || (row.length !== 6 && row.length !== 7)) {
        const len = Array.isArray(row) ? row.length : "not-an-array";
        throw new Error(`frame-data: "${c}"|"${mv}" has invalid row length ${len} (must be 6 or 7)`);
      }
      for (let i = 0; i < 6; i++) {
        if (typeof row[i] !== "string") throw new Error(`frame-data: "${c}"|"${mv}" index ${i} is not a string`);
      }
      if (row.length === 7) {
        const tags = row[6];
        if (!Array.isArray(tags) || tags.some((t) => typeof t !== "string")) {
          throw new Error(`frame-data: "${c}"|"${mv}" index 6 must be an array of strings`);
        }
      }
    }
  }
  return fd as FrameData;
}
