import type { UmamiWebsiteMetrics } from "../interfaces/UmamiWebsiteMetrics";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ fetch, route }) => {
  const viewsRequest = await fetch("/api/views");
  const viewsResponse: UmamiWebsiteMetrics[] = await viewsRequest.json();

  const views = viewsResponse.find(({ x }) => x === route.id)?.y ?? "🛸";

  return { views };
}) satisfies LayoutServerLoad;
