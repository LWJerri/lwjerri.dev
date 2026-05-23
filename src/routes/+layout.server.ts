import type { LayoutServerLoad } from "./$types";

export const prerender = false;

export const load = (({ url }) => ({
  isAnalyticsEnabled: url.hostname.startsWith("lwjerri"),
})) satisfies LayoutServerLoad;
