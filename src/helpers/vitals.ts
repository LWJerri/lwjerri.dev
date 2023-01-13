import { getCLS, getFCP, getFID, getLCP, getTTFB } from "web-vitals";

const vitalsUrl = "https://vitals.vercel-analytics.com/v1/vitals";

async function sendToAnalytics(metric, options) {
  const page = Object.entries(options.params).reduce(
    (acc, [key, value]) => acc.replace(value, `[${key}]`),
    options.path,
  );

  const body = {
    dsn: options.analyticsId, // qPgJqYH9LQX5o31Ormk8iWhCxZO
    id: metric.id, // v2-1653884975443-1839479248192
    page, // /blog/[slug]
    href: location.href, // https://my-app.vercel.app/blog/my-test
    event_name: metric.name, // TTFB
    value: metric.value.toString(), // 60.20000000298023
    // @ts-ignore
    speed: navigator?.connection?.effectiveType ?? "", // 4g
  };

  console.log(body);

  if (options.debug) {
    console.log("[Analytics]", metric.name, JSON.stringify(body, null, 2));
  }

  const blob = new Blob([new URLSearchParams(JSON.stringify(body)).toString()], {
    // This content type is necessary for `sendBeacon`
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
  console.log(options);

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
