import { z } from "zod";
import { LocalizedText } from "./i18n";

/**
 * Schemas for the small per-character "move meta" tables that used to live as
 * literals in `src/data/moves.ts` (CATS / CHAINLBL / WARN) plus the move display
 * order. They mirror the exact legacy shapes so the build-time adapter can feed
 * the app unchanged objects.
 */

/** One move-list category: stable id + localized section heading. */
export const Category = z.object({
  id: z.string(),
  name: LocalizedText,
});
export type Category = z.infer<typeof Category>;

/** The ordered category list (order = display order). */
export const Categories = z.array(Category);
export type Categories = z.infer<typeof Categories>;

/** Chain-family labels, keyed by chain id (e.g. `ub4`) -> localized label. */
export const ChainLabels = z.record(LocalizedText);
export type ChainLabels = z.infer<typeof ChainLabels>;

/** Per-move warning/duckable notes, keyed by move id -> localized text. */
export const Warnings = z.record(LocalizedText);
export type Warnings = z.infer<typeof Warnings>;

/** Move display order: every move id in legacy insertion order. */
export const MoveOrder = z.array(z.string()).nonempty();
export type MoveOrder = z.infer<typeof MoveOrder>;
