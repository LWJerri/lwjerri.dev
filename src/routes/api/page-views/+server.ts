import { PROJECT_ID, VERCEL_TOKEN } from "$env/static/private";
import redisClient from "$lib/redisClient";
import type { RequestHandler } from "./$types";

interface PageView {
  key: string;
  total: number;
  devices: number;
}

const VERCEL_URL = "https://vercel.com/api/web/insights/stats";
const REDIS_KEY = "pagesViewsStats";

export const GET = (async () => {
  let getCacheData = await redisClient.get(REDIS_KEY);

  if (!getCacheData) {
    const preOneYearAgo = new Date();
    preOneYearAgo.setFullYear(preOneYearAgo.getFullYear() - 1);

    const oneYearAgo = preOneYearAgo.toISOString();
    const currentDate = new Date().toISOString();

    const vercelRequest = await fetch(
      `${VERCEL_URL}/path?from=${oneYearAgo}&to=${currentDate}&projectId=${PROJECT_ID}&environment=production`,
      { headers: { Authorization: `Bearer ${VERCEL_TOKEN}` } },
    );

    const { data: vercelResponse }: { data: PageView[] } = await vercelRequest.json();

    await redisClient.set(REDIS_KEY, JSON.stringify(vercelResponse), "EX", 60 * 60);

    getCacheData = await redisClient.get(REDIS_KEY);
  }

  return new Response(getCacheData);
}) satisfies RequestHandler;
