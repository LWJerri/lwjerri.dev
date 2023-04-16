import type { RequestHandler } from "@sveltejs/kit";

interface Link {
  name: string;
  url: string;
}

export const GET = (() => {
  const externalLinks: Link[] = [{ name: "Support me", url: "https://send.monobank.ua/8webyivBtV" }];

  return new Response(JSON.stringify(externalLinks));
}) satisfies RequestHandler;
