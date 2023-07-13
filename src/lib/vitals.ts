import { onCLS, onFCP, onFID, onINP, onLCP, onTTFB, type Metric } from "web-vitals";
import type { NavigatorWithConnection } from "../interfaces";

const vitalsUrl = "https://vitals.vercel-analytics.com/v1/vitals";

function getConnectionSpeed() {
  const customNavigator: NavigatorWithConnection = navigator;

  return customNavigator?.connection?.effectiveType ?? "";
}

function sendToAnalytics(metric: Metric, options: { path: string; params: string; analyticsId: string }) {
  const page = Object.entries(options.params).reduce(
    (acc, [key, value]) => acc.replace(value, `[${key}]`),
    options.path,
  );

  const body: Record<string, string> = {
    dsn: options.analyticsId,
    id: metric.id,
    page,
    href: location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    speed: getConnectionSpeed(),
  };

  const blob = new Blob([new URLSearchParams(body).toString()], {
    type: "application/x-www-form-urlencoded",
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, blob);
  } else
    fetch(vitalsUrl, {
      body: blob,
      method: "POST",
      credentials: "omit",
      keepalive: true,
    });
}

export function webVitals(options: { path: string; params: string; analyticsId: string }) {
  try {
    onFID((metric) => sendToAnalytics(metric, options));
    onTTFB((metric) => sendToAnalytics(metric, options));
    onLCP((metric) => sendToAnalytics(metric, options));
    onCLS((metric) => sendToAnalytics(metric, options));
    onFCP((metric) => sendToAnalytics(metric, options));
    onINP((metric) => sendToAnalytics(metric, options));
  } catch (err) {
    console.error("[Analytics]", err);
  }
}
