import { KV_REST_API_TOKEN, KV_REST_API_URL, UMAMI_SITE_ID } from "$env/static/private";
import type { RequestEvent, RequestHandler } from "@sveltejs/kit";
import { createClient } from "@vercel/kv";
import { umamiAuth } from "../../../helpers/umamiAuth";
import type { PageStat } from "../../../interfaces/PageStat";

const REDIS_KEY = "VIEWS_STATS";

export const GET = (async ({ url }: RequestEvent<Partial<Record<string, string>>, string | null>) => {
  const UMAMI_URL = url.hostname === "localhost" ? "https://umami.lwjerri.ml" : `${url.origin}/stats`;

  const vercelKV = createClient({
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN,
  });

  let vercelKVData = (await vercelKV.get<PageStat[]>(REDIS_KEY)) ?? [];

  if (!vercelKVData.length) {
    const { isOk, token } = await umamiAuth(UMAMI_URL);

    if (!isOk) return new Response(JSON.stringify([]));

    const URLQueryParams = new URLSearchParams({
      type: "url",
      startAt: "1689109200380", // 13.07.2023
      endAt: Date.now().toString(),
      timezone: "Europe/Kyiv",
    });

    const umamiMetricsRequest = await fetch(`${UMAMI_URL}/api/websites/${UMAMI_SITE_ID}/metrics?${URLQueryParams}`, {
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    });

    if (umamiMetricsRequest.status !== 200) return new Response(JSON.stringify([]));

    const umamiMetricsResponse: PageStat[] = await umamiMetricsRequest.json();

    const writableData: PageStat[] = <any>JSON.stringify(umamiMetricsResponse);

    await vercelKV.set<PageStat[]>(REDIS_KEY, writableData, { ex: 60 * 60 });
  }

  vercelKVData = (await vercelKV.get<PageStat[]>(REDIS_KEY)) ?? [];

  return new Response(JSON.stringify(vercelKVData));
}) satisfies RequestHandler;
