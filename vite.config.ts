import { defineConfig } from "vite";
import { alisaMovesPlugin } from "./src/content/runtime/vitePlugin";

export default defineConfig({
  base: "/AlisaGuide/",
  plugins: [alisaMovesPlugin()],
});
