import { KV_REST_API_TOKEN, KV_REST_API_URL } from "$env/static/private";
import type { RequestEvent, RequestHandler } from "@sveltejs/kit";
import { createClient } from "@vercel/kv";
import { getUmamiMetrics } from "../../../helpers/getUmamiMetrics";
import { umamiAuth } from "../../../helpers/umamiAuth";
import type { PageStat } from "../../../interfaces/PageStat";

const KV_VIEWS_KEY = "VIEWS_STATS";
const KV_UMAMI_KEY = "UMAMI_ACCESS_KEY";

export const GET = (async (req: RequestEvent<Partial<Record<string, string>>, string | null>) => {
  const UMAMI_URL = req.url.hostname === "localhost" ? "https://umami.lwjerri.dev" : `${req.url.origin}/stats`;

  const vercelKV = createClient({
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN,
  });

  let vercelKVData: PageStat[] = [];
  let umamiToken: string;

  const [incomingVercelKVData, umamiAccessKey] = await Promise.all([
    vercelKV.get<PageStat[]>(KV_VIEWS_KEY),
    vercelKV.get<string | null>(KV_UMAMI_KEY),
  ]);

  if (incomingVercelKVData) {
    vercelKVData = incomingVercelKVData;
  }

  if (!umamiAccessKey) {
    const { isOk, token } = await umamiAuth(UMAMI_URL);

    if (!isOk) return new Response(JSON.stringify([]));

    umamiToken = token;
  } else {
    umamiToken = umamiAccessKey;
  }

  if (!vercelKVData.length) {
    const URLQueryParams = new URLSearchParams({
      type: "url",
      startAt: "1689109200380", // 13.07.2023
      endAt: Date.now().toString(),
      timezone: "Europe/Kyiv",
    });

    let umamiMetrics = await getUmamiMetrics(UMAMI_URL, URLQueryParams, umamiToken);

    if (umamiMetrics.status === 401) {
      const { isOk, token } = await umamiAuth(UMAMI_URL);

      if (!isOk) return new Response(JSON.stringify([]));

      await vercelKV.set<string>(KV_UMAMI_KEY, token, { ex: 60 * 60 * 24 * 30 });

      umamiMetrics = await getUmamiMetrics(UMAMI_URL, URLQueryParams, token);
    }

    if (umamiMetrics.status !== 200) return new Response(JSON.stringify([]));

    const umamiMetricsResponse: PageStat[] = await umamiMetrics.json();

    const writableData: PageStat[] = <any>JSON.stringify(umamiMetricsResponse);

    await vercelKV.set<PageStat[]>(KV_VIEWS_KEY, writableData, { ex: 60 * 60 });
  }

  vercelKVData = (await vercelKV.get<PageStat[]>(KV_VIEWS_KEY)) ?? [];

  return new Response(JSON.stringify(vercelKVData));
}) satisfies RequestHandler;
