import { proxyAnalyticsScript } from "$lib/server/proxyAnalyticsScript";
import type { RequestHandler } from "./$types";

const RYBBIT_SCRIPT_URL = "https://rybbit.lwjerri.dev/api/script.js";

export const GET: RequestHandler = ({ fetch }) => proxyAnalyticsScript(RYBBIT_SCRIPT_URL, fetch);
