import { z } from "zod";
import { LocalizedText } from "./i18n";

/**
 * Stance guide content (Phase 4): one file per Alisa stance under
 * `content/tekken8/characters/alisa/stances/`. Every `move` reference must be
 * an existing MOVES id (enforced by the builder + `content:check`); every
 * stated frame/property fact must come from our own canonical move YAML.
 * TekkenDocs-only claims belong in `manualReview`, never in the guide fields.
 */

/** A move reference with an optional short localized annotation. */
export const StanceMoveRef = z.object({
  move: z.string(),
  note: LocalizedText.optional(),
});
export type StanceMoveRef = z.infer<typeof StanceMoveRef>;

/** A key option: move reference plus its role in the stance gameplan. */
export const StanceKeyOption = z.object({
  move: z.string(),
  role: LocalizedText,
});
export type StanceKeyOption = z.infer<typeof StanceKeyOption>;

/** A documented transition into another stance. */
export const StanceTransition = z.object({
  to: z.enum(["DES", "SBT", "DBT", "BKP"]),
  via: z.string(),
  note: LocalizedText.optional(),
});
export type StanceTransition = z.infer<typeof StanceTransition>;

export const Stance = z.object({
  id: z.enum(["des", "sbt", "dbt", "bkp"]),
  label: LocalizedText,
  short: LocalizedText,
  purpose: LocalizedText,
  commonEntries: z.array(StanceMoveRef).nonempty().optional(),
  keyOptions: z.array(StanceKeyOption).nonempty(),
  safeOptions: z.array(StanceMoveRef).nonempty().optional(),
  riskyOptions: z.array(StanceMoveRef).nonempty().optional(),
  lows: z.array(StanceMoveRef).nonempty().optional(),
  mids: z.array(StanceMoveRef).nonempty().optional(),
  exits: z.array(LocalizedText).nonempty().optional(),
  transitions: z.array(StanceTransition).nonempty().optional(),
  counterplay: LocalizedText,
  trainingDrills: z.array(LocalizedText).nonempty(),
  /** Unverified (e.g. TekkenDocs v3.00) claims awaiting a 3.01.01 lab check. */
  manualReview: z.array(LocalizedText).nonempty().optional(),
});
export type Stance = z.infer<typeof Stance>;
