import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  define: { "import.meta.env.VERCEL_ANALYTICS_ID": process.env.VERCEL_ANALYTICS_ID },
});
