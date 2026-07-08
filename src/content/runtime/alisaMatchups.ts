// Client entry for the curated matchup dossiers (MU). Assembled from YAML at
// BUILD time by the `virtual:alisa-matchups` Vite plugin, so the browser bundle
// receives only the finished array — no YAML parser, no Zod, and no
// `src/data/matchups.ts`. The runtime `muDerive(FD)` suggestions and the
// deep/shallow selection logic in main.ts operate on this array exactly as before.
export { MU } from "virtual:alisa-matchups";
