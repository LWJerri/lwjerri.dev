import type { UmamiWebsiteMetric } from "../interfaces/UmamiWebsiteMetric";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ fetch, route }) => {
  let views: string | number = "🤖";

  try {
    const request = await fetch("/api/views");
    const response: UmamiWebsiteMetric[] = await request.json();

    views = response.find(({ x }) => x === route.id)?.y ?? "🛸";
  } catch (err) {
    console.error(err);
  }

  return { views };
}) satisfies LayoutServerLoad;
