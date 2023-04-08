import type { LayoutServerLoad } from "./$types";

interface PageView {
  key: string;
  total: number;
  devices: number;
}

export const load = (async ({ url, fetch }) => {
  const [pageViewsRequest, navbarLinks] = await Promise.all([fetch("/api/page-views"), fetch("/api/navbar")]);
  const pageViewsResponse: PageView[] = await pageViewsRequest.json();

  const currentPageViews = pageViewsResponse.find(({ key }) => key === url.pathname)?.total ?? 0;

  return { currentPageViews, navbarLinks: navbarLinks.json() };
}) satisfies LayoutServerLoad;
