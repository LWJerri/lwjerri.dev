import { UMAMI_SITE_ID } from "$env/static/private";

export async function getUmamiMetrics(apiURL: string, query: URLSearchParams, token: string) {
  const headers = { "Content-Type": "application/json", Authorization: `Bearer ${token}` };
  const requestURL = `${apiURL}/api/websites/${UMAMI_SITE_ID}/metrics?${query}`;

  return await fetch(requestURL, { headers });
}
