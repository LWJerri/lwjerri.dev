import type { Link } from "../interfaces";
import type { PageStat } from "../interfaces/PageStat";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ url, fetch }) => {
  const [pageViewsRequest, navbarLinksRequest] = await Promise.all([fetch("/api/page-views"), fetch("/api/navbar")]);

  const pageViewsResponse: PageStat[] = await pageViewsRequest.json();
  const navbarLinks: Link[] = await navbarLinksRequest.json();

  const pageView = pageViewsResponse.find(({ x }) => x === url.pathname)?.y ?? 0;

  return { pageView, navbarLinks };
}) satisfies LayoutServerLoad;
