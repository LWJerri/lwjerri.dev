import { KV_REST_API_TOKEN, KV_REST_API_URL, PROJECT_ID, VERCEL_TOKEN } from "$env/static/private";
import { createClient } from "@vercel/kv";
import type { RequestHandler } from "./$types";

interface PageView {
  key: string;
  total: number;
  devices: number;
}

const VERCEL_URL = "https://vercel.com/api/web/insights/stats";
const REDIS_KEY = "pagesViewsStats";

export const GET = (async () => {
  const vercelKV = createClient({
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN,
  });

  let getCacheData = await vercelKV.get<PageView[]>(REDIS_KEY);

  if (!getCacheData) {
    const preOneYearAgo = new Date();

    preOneYearAgo.setFullYear(preOneYearAgo.getFullYear() - 1);

    const [oneYearAgo] = preOneYearAgo.toISOString().split("T");
    const [currentDate] = new Date().toISOString().split("T");

    const URLQueryParams = new URLSearchParams({
      from: oneYearAgo,
      to: currentDate,
      projectId: PROJECT_ID,
      environment: "production",
    });

    const vercelRequest = await fetch(`${VERCEL_URL}/path?${URLQueryParams}`, {
      headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
    });

    const { data: vercelResponse }: { data: PageView[] } = await vercelRequest.json();

    const writableData: PageView[] = <any>JSON.stringify(vercelResponse);

    await vercelKV.set<PageView[]>(REDIS_KEY, writableData, { ex: 60 * 60 });

    getCacheData = await vercelKV.get<PageView[]>(REDIS_KEY);
  }

  return new Response(JSON.stringify(getCacheData));
}) satisfies RequestHandler;
