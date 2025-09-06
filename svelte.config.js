import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({ runtime: "nodejs22.x", split: false }),
    version: { name: process.env.npm_package_version, pollInterval: 1000 * 10 },
  },
};

export default config;
