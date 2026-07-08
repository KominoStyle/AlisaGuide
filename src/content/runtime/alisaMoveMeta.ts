// Client entry for the Alisa move-meta tables (CATS / CHAINLBL / WARN). Assembled
// from YAML at BUILD time by the `virtual:alisa-move-meta` Vite plugin, so the
// browser bundle receives only finished plain objects — no YAML parser, no Zod,
// and no `src/data/moves.ts`. Parity is proven in `check.ts` against legacy.
export { CATS, CHAINLBL, WARN } from "virtual:alisa-move-meta";
