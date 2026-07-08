import { z } from "zod";
import { LocalizedText } from "./i18n";
import { InputMap } from "./input";
import { Meta } from "./meta";

/**
 * General move categories only. Alisa-specific stances/states (DES, BKP, SBT,
 * DBT, CLK) are NOT categories — they are represented via `stanceMove` +
 * the `stance` reference below and the character-stance entity (`stance.ts`).
 */
export const MoveCategory = z.enum([
  "jab",
  "poke",
  "keepout",
  "low",
  "launcher",
  "whiffPunish",
  "counterHitTool",
  "homing",
  "comboTool",
  "throw",
  "stanceMove",
  "special",
]);

export type MoveCategory = z.infer<typeof MoveCategory>;

/**
 * How a move relates to a stance (character-specific state). Optional on a move;
 * all fields default so a bare `stance: {}` is valid.
 * - `from` — stance the move is performed from (stance id) or `null`.
 * - `to` — stance the move transitions into (stance id) or `null`.
 * - `requires` — other stance/state ids the move needs.
 */
export const MoveStance = z.object({
  from: z.string().nullable().default(null),
  to: z.string().nullable().default(null),
  requires: z.array(z.string()).default([]),
});

export type MoveStance = z.infer<typeof MoveStance>;

/** Frame data as strings, preserved exactly (e.g. "i16", "-9", "+32a"). */
export const Frames = z.object({
  startup: z.string(),
  block: z.string(),
  hit: z.string(),
  ch: z.string().nullable(),
});

/**
 * Localized note. Legacy stores these as bullet lists (`{en: string[], de: string[]}`);
 * the union also accepts a single localized object or a plain string for safety.
 * Kept exactly as-is to avoid losing legacy data (not displayed yet).
 */
export const LocalizedNote = z.union([
  z.object({ en: z.array(z.string()), de: z.array(z.string()) }),
  LocalizedText,
  z.string(),
]);

export const Move = z.object({
  id: z.string(),
  character: z.string(),
  input: InputMap,
  /** Optional display name; `null` when the move has no proper name. */
  name: LocalizedText.nullable(),
  category: MoveCategory,
  /** Difficulty tier 0..3, mirrors legacy `lv`. */
  difficulty: z.number().int().min(0).max(3),
  /**
   * Range bucket, mirrors legacy `rng` (set by `reCategorize()`): `"s"` short,
   * `"m"` mid, `"l"` long. Required — every runtime move has it.
   */
  range: z.enum(["s", "m", "l"]),
  /**
   * Hit level(s), mirrors legacy `lev`. Legacy is inconsistent — sometimes a
   * localized object, sometimes a bare string — preserved exactly as-is.
   */
  levels: z.union([LocalizedText, z.string()]),
  frames: Frames,
  /** Property tags, mirrors legacy `p`. */
  properties: z.array(z.string()),
  /** Localized guide text, mirrors legacy `x`; `null` when the move has none. */
  guide: LocalizedText.nullable(),
  /** Legacy `note` (preserved, not displayed yet). */
  note: LocalizedNote.nullable().optional(),
  /** Legacy `dmg` (preserved, not displayed yet). */
  damage: z.union([z.string(), z.number()]).nullable().optional(),
  /**
   * Legacy `key` flag from `patchData()` marking Alisa's essential moves. Stored
   * exactly as the runtime value (a number `1`), so the union also accepts the
   * boolean shape a future cleanup might use. Preserved, not displayed yet.
   */
  key: z.union([z.boolean(), z.number()]).nullable().optional(),
  /** Legacy `keytip` (localized one-liner for key moves); preserved, not displayed yet. */
  keytip: z.union([LocalizedText, z.string()]).nullable().optional(),
  /** Legacy `chain` chain-family reference (e.g. "ub4"); preserved, not displayed yet. */
  chain: z.string().nullable().optional(),
  /** Reserved for future follow-up links. */
  followups: z.array(z.string()),
  /** Optional stance relation (present only for stance moves). */
  stance: MoveStance.optional(),
  meta: Meta,
});

export type Move = z.infer<typeof Move>;
