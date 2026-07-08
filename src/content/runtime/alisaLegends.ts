// Client entry for the notation legends (LEG / LEGP / LEGF / LEGS). Assembled from
// YAML at BUILD time by the `virtual:alisa-legends` Vite plugin, so the browser
// bundle receives only the finished ordered tuple arrays — no YAML parser, no Zod,
// and no `src/data/legends.ts`. The legend rendering in main.ts operates on these
// arrays exactly as before.
export { LEG, LEGP, LEGF, LEGS } from "virtual:alisa-legends";
