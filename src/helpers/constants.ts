import type { HeaderLink } from "../interfaces";

const GEO_INFO = { name: "Ukraine", url: "https://www.google.com/maps/place/Ukraine" };
const UMAMI_STATS_URL = "https://umami.lwjerri.dev/share/jV8DPlSgY0nXu0GL/lwjerri.dev";

const HEADER_LINKS: HeaderLink[] = [
  { title: "My projects", url: "/projects" },
  { title: "About me ", url: "/about" },
  { title: "My GitHub", url: "https://github.com/LWJerri" },
  { title: "Support me", url: "https://send.monobank.ua/8webyivBtV" },
];

export { GEO_INFO, HEADER_LINKS, UMAMI_STATS_URL };
