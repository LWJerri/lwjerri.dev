import { getCLS, getFCP, getFID, getLCP, getTTFB } from "web-vitals";

const vitalsUrl = "https://vitals.vercel-analytics.com/v1/vitals";

async function sendToAnalytics(metric, options) {
  const page = Object.entries(options.params).reduce(
    (acc, [key, value]) => acc.replace(value, `[${key}]`),
    options.path,
  );

  const body = {
    dsn: options.analyticsId,
    id: metric.id,
    page,
    href: location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    // @ts-ignore
    speed: navigator?.connection?.effectiveType ?? "",
  };

  console.log(body);

  if (options.debug) {
    console.log("[Analytics]", metric.name, JSON.stringify(body, null, 2));
  }

  const blob = new Blob([new URLSearchParams(JSON.stringify(body)).toString()], {
    type: "application/x-www-form-urlencoded",
  });
  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, blob);
  } else
    await fetch(vitalsUrl, {
      body: blob,
      method: "POST",
      credentials: "omit",
      keepalive: true,
    });
}

export function webVitals(options) {
  try {
    getFID(async (metric) => await sendToAnalytics(metric, options));
    getTTFB(async (metric) => await sendToAnalytics(metric, options));
    getLCP(async (metric) => await sendToAnalytics(metric, options));
    getCLS(async (metric) => await sendToAnalytics(metric, options));
    getFCP(async (metric) => await sendToAnalytics(metric, options));
  } catch (err) {
    console.error("[Analytics]", err);
  }
}
