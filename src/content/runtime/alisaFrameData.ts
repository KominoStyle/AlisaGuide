// Client entry for the generated positional frame data (FD). Assembled at BUILD
// time by the `virtual:alisa-frame-data` Vite plugin from the generated
// `frame-data.json` asset, so the browser bundle receives only the finished plain
// object — no `fs`, no validators, no raw parsing, and no `src/data/frame-data.ts`.
// The runtime star/held aliasing, OPP-over-FD move detail, and muDerive(FD) in
// main.ts operate on this object exactly as before.
export { FD } from "virtual:alisa-frame-data";
