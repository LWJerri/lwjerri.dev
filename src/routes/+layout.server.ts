import type { PageStat } from "../interfaces/PageStat";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ fetch, route }) => {
  const pageViewsRequest = await fetch("/api/views");
  const pageViewsResponse: PageStat[] = await pageViewsRequest.json();

  const pageView = pageViewsResponse.find(({ x }) => x === route.id)?.y ?? 0;

  return { pageView };
}) satisfies LayoutServerLoad;
