// Client entry for the Alisa punish tables. Assembled from YAML at BUILD time
// by the `virtual:alisa-punish` Vite plugin, so the browser bundle receives only
// the finished arrays — no YAML parser, no Zod. PUNISH is the canonical table
// (legacy dis/use/why + v2 kind/startup/alt/followUps); PUNISH_REVIEW holds the
// clearly-labelled manual-review candidates (never canonical advice).
export { PUNISH, PUNISH_REVIEW } from "virtual:alisa-punish";
