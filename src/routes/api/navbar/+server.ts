import type { RequestHandler } from "@sveltejs/kit";

interface Link {
  name: string;
  url: string;
}

export const GET = (({ setHeaders }) => {
  const externalLinks: Link[] = [{ name: "Support me", url: "https://send.monobank.ua/8webyivBtV" }];

  setHeaders({ "cache-control": "max-age=3600" });

  return new Response(JSON.stringify(externalLinks));
}) satisfies RequestHandler;
