import { sveltekit } from "@sveltejs/kit/vite";
import analyze from "rollup-plugin-analyzer";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit(), analyze({ summaryOnly: true })],
  build: {
    rollupOptions: {
      output: {
        compact: true,
      },
    },
  },
});
