import type { LayoutServerLoad } from "./$types";

export const prerender = false;

export const load = (({ url }) => {
  console.error("url.hostname", url.hostname);

  return {
    isAnalyticsEnabled: url.hostname.startsWith("lwjerri"),
  };
}) satisfies LayoutServerLoad;
