import type { LayoutServerLoad } from "./$types";

export const load = (({ url }) => {
  return {
    isAnalyticsEnabled: url.hostname.startsWith("lwjerri"),
  };
}) satisfies LayoutServerLoad;
