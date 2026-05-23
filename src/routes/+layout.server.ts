import type { LayoutServerLoad } from "./$types";

export const load = (({ url }) => ({
  isAnalyticsEnabled: url.hostname.startsWith("lwjerri"),
})) satisfies LayoutServerLoad;
