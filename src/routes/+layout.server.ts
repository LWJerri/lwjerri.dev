import type { LayoutServerLoad } from "./$types";

interface PageView {
  key: string;
  total: number;
  devices: number;
}

interface NavbarLink {
  name: string;
  url: string;
}

export const load = (async ({ url, fetch }) => {
  const [pageViewsRequest, navbarLinksRequest] = await Promise.all([fetch("/api/page-views"), fetch("/api/navbar")]);

  const pageViewsResponse: PageView[] = await pageViewsRequest.json();
  const externalNavbarLinks: NavbarLink[] = await navbarLinksRequest.json();

  const pageViews = pageViewsResponse.find(({ key }) => key === url.pathname)?.total ?? 0;

  return { pageViews, externalNavbarLinks };
}) satisfies LayoutServerLoad;
