// MOVES and the move-meta tables (CATS/CHAINLBL/WARN) now come from the YAML
// content system via build-time virtual modules (parity-checked against legacy).
// The client no longer imports src/data/moves.ts — it stays only as the Node-only
// parity oracle used by `content:check`.
export { MOVES } from "../content/runtime/alisaMoves";
export { CATS, CHAINLBL, WARN } from "../content/runtime/alisaMoveMeta";
// OPP now comes from the content system (build-time virtual module). opponents.ts
// stays only as the Node-only parity oracle used by `content:check`.
export { OPP } from "../content/runtime/alisaOpponents";
// FD now comes from the content system (build-time virtual module) sourced from
// the generated content/tekken8/frame-data/frame-data.json asset. frame-data.ts
// stays only as the Node-only parity oracle used by `content:check`.
export { FD } from "../content/runtime/alisaFrameData";
// MU now comes from the content system (build-time virtual module). matchups.ts
// stays only as the Node-only parity oracle used by `content:check`.
export { MU } from "../content/runtime/alisaMatchups";
// COMBOS now comes from the content system (build-time virtual module). combos.ts
// stays only as the Node-only parity oracle used by `content:check`.
export { COMBOS } from "../content/runtime/alisaCombos";
// PUNISH now comes from the content system (build-time virtual module). punish.ts
// stays only as the Node-only parity oracle used by `content:check`.
export { PUNISH } from "../content/runtime/alisaPunish";
// Legends (LEG/LEGP/LEGF/LEGS) now come from the content system (build-time virtual
// module). legends.ts stays only as the Node-only parity oracle used by
// `content:check`. src/data/index.ts is now purely an adapter barrel — no data.
export { LEG, LEGP, LEGF, LEGS } from "../content/runtime/alisaLegends";
