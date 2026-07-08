import { z } from "zod";

/** Verification lifecycle for a record. */
export const Status = z.enum([
  "verified",
  "needs_testing",
  "placeholder",
  "outdated",
  "probably_wrong",
]);

export type Status = z.infer<typeof Status>;

/**
 * Provenance metadata carried by every content record.
 * `patch` / `source` are nullable so records can be added before that info is known.
 */
export const Meta = z.object({
  status: Status,
  patch: z.string().nullable(),
  source: z.string().nullable(),
});

export type Meta = z.infer<typeof Meta>;
