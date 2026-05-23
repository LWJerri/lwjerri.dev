import { proxyAnalyticsScript } from "$lib/server/proxyAnalyticsScript";
import type { RequestHandler } from "./$types";

const UMAMI_SCRIPT_URL = "https://umami.lwjerri.dev/script.js";

export const GET: RequestHandler = ({ fetch }) => proxyAnalyticsScript(UMAMI_SCRIPT_URL, fetch);
