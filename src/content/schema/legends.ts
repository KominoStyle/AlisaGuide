import { z } from "zod";

/**
 * Notation legend groups — flat mirror of the legacy `LEG` / `LEGP` / `LEGF` /
 * `LEGS` arrays (`src/data/legends.ts`). Each group is an ordered list of
 * `{ symbol, text: { en, de } }`; symbols and text are copied verbatim (never
 * normalized). Symbols are unique within a group but may repeat across groups.
 */
const LegendText = z.object({
  en: z.string().min(1),
  de: z.string().min(1),
});

const LegendEntry = z.object({
  symbol: z.string().min(1),
  text: LegendText,
});

const LegendGroup = z.array(LegendEntry).nonempty();

export const Legends = z.object({
  LEG: LegendGroup,
  LEGP: LegendGroup,
  LEGF: LegendGroup,
  LEGS: LegendGroup,
});

export type Legends = z.infer<typeof Legends>;
