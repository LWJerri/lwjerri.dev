const CACHE_CONTROL = "public, max-age=31536000, immutable";

async function proxyAnalyticsScript(url: string, fetch: typeof globalThis.fetch): Promise<Response> {
  const response = await fetch(url);

  if (!response.ok) return new Response("Failed to load analytics script", { status: response.status });

  return new Response(response.body, {
    headers: {
      "content-type": "application/javascript; charset=utf-8",
      "cache-control": CACHE_CONTROL,
    },
  });
}

export { proxyAnalyticsScript };
