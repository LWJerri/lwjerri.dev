import { PROJECT_ID, VERCEL_TOKEN } from "$env/static/private";
import redisClient from "$lib/redisClient";
import type { RequestHandler } from "./$types";

interface PageView {
  key: string;
  total: number;
  devices: number;
}

const allowedPagesList = ["/", "/projects", "/about"];

export const GET = (async ({ setHeaders }) => {
  const getCacheKey = await redisClient.get("pagesViewsCache");

  if (!getCacheKey) {
    await redisClient.set("pagesViewsCache", Date.now(), "EX", 60 * 60);

    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

    const vercelRequest = await fetch(
      `https://vercel.com/api/web/insights/stats/path?from=${threeMonthsAgo.toISOString()}&to=${new Date().toISOString()}&projectId=${PROJECT_ID}&environment=production`,
      {
        headers: {
          Authorization: `Bearer ${VERCEL_TOKEN}`,
        },
      },
    );

    const { data: vercelResponse } = await vercelRequest.json();
    const allowedPages: PageView[] = vercelResponse.filter((view: PageView) => allowedPagesList.includes(view.key));

    const findKeyInRedis = await redisClient.get("pagesViewsStats");

    if (!findKeyInRedis) {
      await redisClient.set("pagesViewsStats", JSON.stringify(allowedPages));
    } else {
      const dataFromRedis: PageView[] = JSON.parse(findKeyInRedis);

      const updatedList = dataFromRedis.map((viewRedis) => {
        const matchingEntry = allowedPages.find((viewFilter) => viewFilter.key === viewRedis.key);

        const total = viewRedis.total + (matchingEntry!.total - viewRedis.total);
        const devices = viewRedis.devices + (matchingEntry!.devices - viewRedis.devices);

        return matchingEntry && viewRedis.total < total ? { ...viewRedis, total, devices } : viewRedis;
      });

      await redisClient.set("pagesViewsStats", JSON.stringify(updatedList));
    }
  }

  const dataFromRedis = await redisClient.get("pagesViewsStats");

  setHeaders({ "cache-control": "max-age=3600" });

  return new Response(dataFromRedis);
}) satisfies RequestHandler;
