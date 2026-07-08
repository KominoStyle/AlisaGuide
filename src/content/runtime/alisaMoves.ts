// Client entry for the Alisa MOVES table. The data is assembled from YAML at
// BUILD time by the `virtual:alisa-moves` Vite plugin (see `vitePlugin.ts`), so
// the browser bundle receives only the finished plain object — no YAML parser,
// no Zod, no raw YAML. The parity checker (`check.ts`) proves this object is
// deeply equal to the legacy runtime MOVES via the same shared Node builder.
export { MOVES } from "virtual:alisa-moves";
