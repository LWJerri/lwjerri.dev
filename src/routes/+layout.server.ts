import type { LayoutServerLoad } from "./$types";

export const load = (({ url }) => {
  console.log(url.hostname);

  return {
    isAnalyticsEnabled: url.hostname.startsWith("lwjerri"),
  };
}) satisfies LayoutServerLoad;
