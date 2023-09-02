import { vercelKV } from "$lib/vercelKv";
import type { PageStat } from "../../../interfaces/PageStat";
import type { RequestEvent } from "./$types";

const KV_VIEWS_KEY = "VIEWS_STATS";

export async function GET(event: RequestEvent) {
  let totalViewsStats: PageStat[] = [];

  const getStatsFromKV = await vercelKV.get<PageStat[]>(KV_VIEWS_KEY);

  if (!getStatsFromKV) {
    const request = await event.fetch("/api/update-views");

    totalViewsStats = await request.json();
  } else {
    totalViewsStats = getStatsFromKV;
  }

  return new Response(JSON.stringify(totalViewsStats));
}
