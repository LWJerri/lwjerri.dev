import type { LayoutServerLoad } from "./$types";

export const load = (({ url }) => ({
  enableAnalytics: url.hostname.startsWith("lwjerri"),
})) satisfies LayoutServerLoad;
