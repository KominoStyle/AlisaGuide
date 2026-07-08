// Client entry for the curated opponent frame data (OPP). Assembled from YAML at
// BUILD time by the `virtual:alisa-opponents` Vite plugin, so the browser bundle
// receives only the finished `"Char|move"`-keyed object — no YAML parser, no Zod,
// and no `src/data/opponents.ts`. The runtime `oppNorm` re-keying and OPP-over-FD
// fallback in main.ts operate on this object exactly as before.
export { OPP } from "virtual:alisa-opponents";
