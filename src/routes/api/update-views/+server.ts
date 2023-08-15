import { umamiAuth } from "$lib/umamiAuth";
import { umamiMetrics } from "$lib/umamiMetrics";
import { vercelKV } from "$lib/vercelKv";
import type { PageStat } from "../../../interfaces/PageStat";

const KV_VIEWS_KEY = "VIEWS_STATS";

export async function GET(event) {
  const UMAMI_URL = event.url.hostname === "localhost" ? "https://umami.lwjerri.dev" : `${event.url.origin}/stats`;

  let totalViewsStats: PageStat[] = [];

  const getStatsFromKV = await vercelKV.get<PageStat[]>(KV_VIEWS_KEY);

  if (getStatsFromKV) {
    totalViewsStats = getStatsFromKV;
  } else {
    const { isOk, token } = await umamiAuth(UMAMI_URL);

    if (isOk) {
      const URLQueryParams = new URLSearchParams({
        type: "url",
        startAt: "1689109200380", // 13.07.2023
        endAt: Date.now().toString(),
        timezone: "Europe/Kyiv",
      });

      const request = await umamiMetrics(UMAMI_URL, URLQueryParams, token);

      totalViewsStats = await request.json();

      await vercelKV.set(KV_VIEWS_KEY, JSON.stringify(totalViewsStats), { ex: 60 * 60 * 24 * 7 });
    }
  }

  return new Response(JSON.stringify(totalViewsStats));
}
