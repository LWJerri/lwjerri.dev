import type { UmamiMetric } from "../interfaces/umamiMetric";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ fetch, route }) => {
  let views: number = 0;

  try {
    const request = await fetch("/api/views");
    const response: UmamiMetric[] = await request.json();

    views = response.find(({ x }) => x === route.id)?.y ?? 0;
  } catch (err) {
    console.error(err);
  }

  return { views };
}) satisfies LayoutServerLoad;
