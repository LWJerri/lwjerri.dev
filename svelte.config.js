import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      envVarsInUse: [
        "VERCEL_TOKEN",
        "PROJECT_ID",
        "UPSTASH_REDIS_REST_URL",
        "UPSTASH_REDIS_REST_TOKEN",
        "VERCEL_ANALYTICS_ID",
      ],
      runtime: "nodejs18.x",
      split: false,
    }),
    version: { name: String(Date.now()), pollInterval: 1000 * 10 },
  },
};

export default config;
