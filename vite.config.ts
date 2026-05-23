import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import analyze from "rollup-plugin-analyzer";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [enhancedImages(), sveltekit(), analyze({ summaryOnly: true })],
});
