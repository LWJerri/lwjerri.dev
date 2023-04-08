import { VERCEL_TOKEN } from "$env/static/private";
import redisClient from "$lib/redisClient";
import type { RequestHandler } from "./$types";

interface PageView {
  key: string;
  total: number;
  devices: number;
}

let pagesViews: PageView[] = [];

export const GET = (async ({ setHeaders }) => {
  const findKeyInRedis = await redisClient.get("pagesViewsStats");

  if (!findKeyInRedis) {
    const today = new Date();
    const sixMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 6, today.getDate());

    const vercelRequest = await fetch(
      `https://vercel.com/api/web/insights/stats/path?from=${sixMonthsAgo}&to=${today}&projectId=lwjerri-dev&environment=production`,
      {
        headers: {
          Authorization: `Bearer ${VERCEL_TOKEN}`,
        },
      },
    );

    const { data: vercelResponse } = await vercelRequest.json();

    await redisClient.set("pagesViewsStats", JSON.stringify(vercelResponse), "EX", 60 * 60);
  }

  const getDataFromRedis = await redisClient.get("pagesViewsStats");
  pagesViews = JSON.parse(String(getDataFromRedis));

  setHeaders({ "cache-control": "max-age=3600" });

  return new Response(JSON.stringify(pagesViews));
}) satisfies RequestHandler;
