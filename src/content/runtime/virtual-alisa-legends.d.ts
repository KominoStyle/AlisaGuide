declare module "virtual:alisa-legends" {
  type LegendTuple = [string, { en: string; de: string }];
  /** Directions & buttons legend (ordered). */
  export const LEG: LegendTuple[];
  /** Situations & stances legend (ordered). */
  export const LEGP: LegendTuple[];
  /** Reading the frame numbers legend (ordered). */
  export const LEGF: LegendTuple[];
  /** Suffix letters legend (ordered). */
  export const LEGS: LegendTuple[];
}
