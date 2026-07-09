// Client entry for the knowledge checks + frame traps (Phase 6). Assembled from
// YAML at BUILD time by the `virtual:alisa-knowledge-checks` Vite plugin, so the
// browser bundle receives only the finished plain arrays — no YAML parser, no
// Zod, no `fs`.
export { KNOWLEDGE_CHECKS, FRAME_TRAPS } from "virtual:alisa-knowledge-checks";
