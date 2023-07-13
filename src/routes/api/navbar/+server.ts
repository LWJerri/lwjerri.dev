import type { RequestHandler } from "@sveltejs/kit";
import type { Link } from "../../../interfaces";

export const GET = (() => {
  const externalLinks: Link[] = [
    { name: "My GitHub", url: "https://github.com/LWJerri" },
    { name: "Support me", url: "https://send.monobank.ua/8webyivBtV" },
  ];

  return new Response(JSON.stringify(externalLinks));
}) satisfies RequestHandler;
