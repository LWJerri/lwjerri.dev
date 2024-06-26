import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({ runtime: "nodejs18.x", split: false }),
    version: { name: String(Date.now()), pollInterval: 1000 * 10 },
  },
};

export default config;
