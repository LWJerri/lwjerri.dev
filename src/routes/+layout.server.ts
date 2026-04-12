import type { UmamiMetric } from "../interfaces/umamiMetric";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ fetch, route, url }) => {
  let views: number = 0;

  try {
    const request = await fetch("/api/views");
    const response: UmamiMetric[] = await request.json();

    views = response.find(({ x }) => x === route.id)?.y ?? 0;
  } catch (err) {
    console.error(err);
  }

  const enableAnalytics = url.hostname.toLowerCase().startsWith("lwjerri");

  return { views, enableAnalytics };
}) satisfies LayoutServerLoad;
