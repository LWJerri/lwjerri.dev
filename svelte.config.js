import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      envVarsInUse: ["VERCEL_TOKEN", "REDIS_USERNAME", "REDIS_PASSWORD", "REDIS_HOST", "REDIS_PORT"],
      runtime: "nodejs18.x",
      split: false,
    }),
    version: { name: String(Date.now()), pollInterval: 1000 * 60 },
  },
};

export default config;
