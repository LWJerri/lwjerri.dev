import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({ runtime: "nodejs24.x", split: false }),
    inlineStyleThreshold: Infinity,
    version: { name: String(Date.now()), pollInterval: 1000 * 10 },
  },
};

export default config;
