import App from "./App.svelte";
import "./index.css";
import { inject } from "@vercel/analytics";
import { webVitals } from "./helpers/vitals";

const analyticsId = import.meta.env.PUBLIC_VERCEL_ANALYTICS_ID;

webVitals({
  path: window.location.pathname,
  analyticsId,
});

inject();

const app = new App({
  target: document.getElementById("app"),
});

export default app;
