import type { Link } from "../interfaces";
import type { PageView } from "../interfaces/PageViews";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ url, fetch }) => {
  const [pageViewsRequest, navbarLinksRequest] = await Promise.all([fetch("/api/page-views"), fetch("/api/navbar")]);

  const pageViewsResponse: PageView[] = await pageViewsRequest.json();
  const navbarLinks: Link[] = await navbarLinksRequest.json();

  const pageViews = pageViewsResponse.find(({ key }) => key === url.pathname)?.total ?? 0;

  return { pageViews, navbarLinks };
}) satisfies LayoutServerLoad;
