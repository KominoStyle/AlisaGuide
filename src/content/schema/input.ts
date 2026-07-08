import { z } from "zod";

/**
 * Input mapping for a move.
 * - `notation` is the canonical string exactly as authored (e.g. "f+2").
 * - `tokens` / `aliases` are reserved for the future search + input-parsing work.
 * - `keyboard` / `controller` are placeholders for the future device-mapping step
 *   and stay `null` until that data is designed.
 */
export const InputMap = z.object({
  notation: z.string(),
  tokens: z.array(z.string()),
  aliases: z.array(z.string()),
  keyboard: z.array(z.string()).nullable(),
  controller: z.record(z.string(), z.string()).nullable(),
});

export type InputMap = z.infer<typeof InputMap>;
