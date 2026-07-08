// Client entry for the Alisa punish cheatsheet. Assembled from YAML at BUILD time
// by the `virtual:alisa-punish` Vite plugin, so the browser bundle receives only
// the finished array — no YAML parser, no Zod, and no `src/data/punish.ts`.
export { PUNISH } from "virtual:alisa-punish";
