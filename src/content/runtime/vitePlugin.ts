import { join } from "node:path";
import { readdirSync } from "node:fs";
import type { Plugin } from "vite";
import { buildAlisaMoves } from "./buildMoves.node";
import { buildAlisaMoveMeta } from "./buildAlisaMoveMeta.node";
import { buildAlisaPunish } from "./buildAlisaPunish.node";
import { buildAlisaOpponents } from "./buildAlisaOpponents.node";
import { buildAlisaMatchups } from "./buildAlisaMatchups.node";
import { buildFrameData } from "./buildFrameData.node";
import { buildAlisaCombos } from "./buildAlisaCombos.node";
import { buildAlisaLegends } from "./buildAlisaLegends.node";

/**
 * Vite plugin exposing build-time virtual modules assembled from YAML in Node:
 *  - `virtual:alisa-moves`      -> `export const MOVES` (the 184-move table)
 *  - `virtual:alisa-move-meta`  -> `export const CATS / CHAINLBL / WARN`
 *  - `virtual:alisa-punish`     -> `export const PUNISH` (punish cheatsheet)
 *  - `virtual:alisa-opponents`  -> `export const OPP` (curated opponent frames)
 *  - `virtual:alisa-matchups`   -> `export const MU` (matchup dossiers)
 *  - `virtual:alisa-frame-data` -> `export const FD` (generated positional frames)
 *  - `virtual:alisa-combos`     -> `export const COMBOS` (combo cheatsheet)
 *  - `virtual:alisa-legends`    -> `export const LEG / LEGP / LEGF / LEGS` (legends)
 *
 * The browser bundle receives ONLY these plain objects — no YAML parser, no Zod,
 * no raw YAML/JSON text, and no `src/data/*` blobs.
 */
const MOVES_ID = "virtual:alisa-moves";
const META_ID = "virtual:alisa-move-meta";
const PUNISH_ID = "virtual:alisa-punish";
const OPP_ID = "virtual:alisa-opponents";
const MU_ID = "virtual:alisa-matchups";
const FD_ID = "virtual:alisa-frame-data";
const COMBOS_ID = "virtual:alisa-combos";
const LEGENDS_ID = "virtual:alisa-legends";
const RESOLVED_MOVES = "\0" + MOVES_ID;
const RESOLVED_META = "\0" + META_ID;
const RESOLVED_PUNISH = "\0" + PUNISH_ID;
const RESOLVED_OPP = "\0" + OPP_ID;
const RESOLVED_MU = "\0" + MU_ID;
const RESOLVED_FD = "\0" + FD_ID;
const RESOLVED_COMBOS = "\0" + COMBOS_ID;
const RESOLVED_LEGENDS = "\0" + LEGENDS_ID;

const CHARS_DIR = join(process.cwd(), "content", "tekken8", "characters");
const META_DIR = join(CHARS_DIR, "alisa");
const META_FILES = ["categories.yml", "chains.yml", "warn.yml", "move-order.yml"].map((f) => join(META_DIR, f));
const PUNISH_FILE = join(META_DIR, "punish.yml");
const OPP_FILES = ["lili", "dragunov"].map((c) => join(CHARS_DIR, c, "opponent-moves.yml"));
const MATCHUPS_DIR = join(META_DIR, "matchups");
const FRAME_DATA_FILE = join(process.cwd(), "content", "tekken8", "frame-data", "frame-data.json");
const COMBOS_FILE = join(META_DIR, "combos", "combos.yml");
const LEGENDS_FILE = join(META_DIR, "legends.yml");

export function alisaMovesPlugin(): Plugin {
  return {
    name: "alisa-moves",
    resolveId(id) {
      if (id === MOVES_ID) return RESOLVED_MOVES;
      if (id === META_ID) return RESOLVED_META;
      if (id === PUNISH_ID) return RESOLVED_PUNISH;
      if (id === OPP_ID) return RESOLVED_OPP;
      if (id === MU_ID) return RESOLVED_MU;
      if (id === FD_ID) return RESOLVED_FD;
      if (id === COMBOS_ID) return RESOLVED_COMBOS;
      if (id === LEGENDS_ID) return RESOLVED_LEGENDS;
      return null;
    },
    load(id) {
      if (id === RESOLVED_MOVES) {
        const { moves, files } = buildAlisaMoves();
        // Watch the move YAML + move-order (affects assembly/order) for dev/build.
        for (const file of files) this.addWatchFile(file);
        this.addWatchFile(join(META_DIR, "move-order.yml"));
        return `export const MOVES = ${JSON.stringify(moves)};\n`;
      }
      if (id === RESOLVED_META) {
        const { CATS, CHAINLBL, WARN } = buildAlisaMoveMeta();
        for (const file of META_FILES) this.addWatchFile(file);
        return (
          `export const CATS = ${JSON.stringify(CATS)};\n` +
          `export const CHAINLBL = ${JSON.stringify(CHAINLBL)};\n` +
          `export const WARN = ${JSON.stringify(WARN)};\n`
        );
      }
      if (id === RESOLVED_PUNISH) {
        this.addWatchFile(PUNISH_FILE);
        return `export const PUNISH = ${JSON.stringify(buildAlisaPunish())};\n`;
      }
      if (id === RESOLVED_OPP) {
        for (const file of OPP_FILES) this.addWatchFile(file);
        return `export const OPP = ${JSON.stringify(buildAlisaOpponents())};\n`;
      }
      if (id === RESOLVED_MU) {
        // Watch _order.yml + every per-matchup file so dev/build rebuild on edits.
        for (const f of readdirSync(MATCHUPS_DIR)) {
          if (f.endsWith(".yml")) this.addWatchFile(join(MATCHUPS_DIR, f));
        }
        return `export const MU = ${JSON.stringify(buildAlisaMatchups())};\n`;
      }
      if (id === RESOLVED_FD) {
        this.addWatchFile(FRAME_DATA_FILE);
        return `export const FD = ${JSON.stringify(buildFrameData())};\n`;
      }
      if (id === RESOLVED_COMBOS) {
        this.addWatchFile(COMBOS_FILE);
        return `export const COMBOS = ${JSON.stringify(buildAlisaCombos())};\n`;
      }
      if (id === RESOLVED_LEGENDS) {
        this.addWatchFile(LEGENDS_FILE);
        const { LEG, LEGP, LEGF, LEGS } = buildAlisaLegends();
        return (
          `export const LEG = ${JSON.stringify(LEG)};\n` +
          `export const LEGP = ${JSON.stringify(LEGP)};\n` +
          `export const LEGF = ${JSON.stringify(LEGF)};\n` +
          `export const LEGS = ${JSON.stringify(LEGS)};\n`
        );
      }
      return null;
    },
  };
}
