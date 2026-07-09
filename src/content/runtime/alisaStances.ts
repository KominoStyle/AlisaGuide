// Client entry for the stance guide (DES / SBT / DBT / BKP). Assembled from YAML
// at BUILD time by the `virtual:alisa-stances` Vite plugin, so the browser bundle
// receives only the finished plain array — no YAML parser, no Zod, no `fs`.
export { STANCES } from "virtual:alisa-stances";
