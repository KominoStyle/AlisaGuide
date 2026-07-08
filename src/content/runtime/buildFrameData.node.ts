import { readFileSync } from "node:fs";
import { join } from "node:path";
import { validateFrameData, type FrameData } from "../schema/frameData";

/**
 * NODE-ONLY builder (uses `fs`). Reads the GENERATED `frame-data.json` asset,
 * validates its positional shape, and returns the exact FD object the app
 * expects (`Record<char, Record<notation, [lv,s,dmg,b,h,ch,tags?]>>`). Rows are
 * never decoded or normalized. Shared by the Vite plugin (client build) and the
 * parity checker; never imported by client/browser code so no parsing/validation
 * logic reaches the bundle.
 */

const FD_FILE = join(process.cwd(), "content", "tekken8", "frame-data", "frame-data.json");

export function buildFrameData(): FrameData {
  return validateFrameData(JSON.parse(readFileSync(FD_FILE, "utf8")));
}
