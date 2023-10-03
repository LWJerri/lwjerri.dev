import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    include: [
      "svelte-confetti",
      "@tabler/icons-svelte",
      "dayjs",
      "dayjs/plugin/timezone",
      "dayjs/plugin/utc",
      "svelte/internal/disclose-version",
      "web-vitals",
    ],
  },
  plugins: [sveltekit()],
  define: { "import.meta.env.VERCEL_ANALYTICS_ID": JSON.stringify(process.env.VERCEL_ANALYTICS_ID) },
});
