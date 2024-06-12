import type { PageLoad } from "./$types";

const socials = {
  telegram: "https://t.me/LWJerri",
  discord: "https://discordlookup.com/user/432085389948485633",
  twitch: "https://www.twitch.tv/LWGerry",
};

const languages = ["TypeScript", "JavaScript"];

const technologies: Record<string, Array<string>> = {
  Frameworks: ["Svelte", "SvelteKit", "TailwindCSS", "NestJS", "Electron", "Nuxt", "Next.js"],
  "Development tools": ["Docker", "TypeORM", "Prisma", "Node.js", "Vite", "React", "Figma"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  "API development & Testing": ["Postman", "Insomnia"],
  VCS: ["Git", "GitHub", "GitLab"],
};

export const load = (() => {
  return { socials, languages, technologies };
}) satisfies PageLoad;
