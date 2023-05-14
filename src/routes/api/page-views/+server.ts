import { PROJECT_ID, UPSTASH_REDIS_REST_TOKEN, UPSTASH_REDIS_REST_URL, VERCEL_TOKEN } from "$env/static/private";
import { Redis } from "@upstash/redis";
import type { RequestHandler } from "./$types";

interface PageView {
  key: string;
  total: number;
  devices: number;
}

const VERCEL_URL = "https://vercel.com/api/web/insights/stats";
const REDIS_KEY = "pagesViewsStats";

export const GET = (async () => {
  const upstashRedisClient = new Redis({
    url: UPSTASH_REDIS_REST_URL,
    token: UPSTASH_REDIS_REST_TOKEN,
  });

  let getCacheData = await upstashRedisClient.get<PageView[]>(REDIS_KEY);

  if (!getCacheData) {
    const preOneYearAgo = new Date();

    preOneYearAgo.setFullYear(preOneYearAgo.getFullYear() - 1);

    const [oneYearAgo] = preOneYearAgo.toISOString().split("T");
    const [currentDate] = new Date().toISOString().split("T");

    const vercelRequest = await fetch(
      `${VERCEL_URL}/path?from=${oneYearAgo}&to=${currentDate}&projectId=${PROJECT_ID}&environment=production`,
      { headers: { Authorization: `Bearer ${VERCEL_TOKEN}` } },
    );

    const { data: vercelResponse }: { data: PageView[] } = await vercelRequest.json();

    const writableData: PageView[] = <any>JSON.stringify(vercelResponse);

    await upstashRedisClient.set<PageView[]>(REDIS_KEY, writableData, { ex: 60 * 60 });

    getCacheData = await upstashRedisClient.get<PageView[]>(REDIS_KEY);
  }

  return new Response(JSON.stringify(getCacheData));
}) satisfies RequestHandler;
