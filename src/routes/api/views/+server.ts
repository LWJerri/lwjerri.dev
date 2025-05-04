import { UMAMI_ENDPOINT, UMAMI_SECRET, UMAMI_SITE_ID, UMAMI_USER_ID } from "$env/static/private";
import { getClient } from "@umami/api-client";

const client = getClient({ userId: UMAMI_USER_ID, secret: UMAMI_SECRET, apiEndpoint: UMAMI_ENDPOINT });

export async function GET() {
  const { ok, data } = await client.getWebsiteMetrics(UMAMI_SITE_ID, {
    type: "url",
    startAt: new Date("2023-07-13").getTime(),
    endAt: new Date().getTime(),
  });

  const response = ok ? data : [];

  return Response.json(response);
}
