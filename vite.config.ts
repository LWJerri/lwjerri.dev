import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: { include: ["svelte-confetti"] },
  plugins: [sveltekit()],
  define: { "import.meta.env.VERCEL_ANALYTICS_ID": JSON.stringify(process.env.VERCEL_ANALYTICS_ID) },
});
