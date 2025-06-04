import type { Education, Job } from "../../interfaces";
import type { PageLoad } from "./$types";

const educations: Education[] = [
  {
    name: '"Harmony" - Taras Shevchenko Gymnasium',
    description: "An ordinary average grammar school, where I completed all 11 grades.",
    years: "September 2011 - May 2022",
    apprentice: 9.25,
  },
  {
    name: "University of Information & CT",
    description: "Technological university located in Kyiv. I am studing at the department of Software Engineering.",
    years: "September 2022 - now",
  },
];

const languages: { name: string; grade: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "Native" }[] = [
  { name: "English", grade: "A2" },
  { name: "Ukrainian", grade: "Native" },
  { name: "Russian", grade: "Native" },
];

const socials: Record<"telegram" | "discord" | "twitch", { url: string }> = {
  telegram: { url: "https://t.me/LWJerri" },
  discord: { url: "https://discordlookup.com/user/432085389948485633" },
  twitch: { url: "https://www.twitch.tv/LWJerry" },
};

const jobs: Job[] = [
  {
    name: "ManageGift",
    postion: "FullStack Engineer",
    years: "January 2021 - February 2024",
    description:
      "Expertly building and sustaining a dynamic website while also overseeing aspects of a cutting-edge Discord bot. Using PHP and learning more about how users should work with the site, working with data, and more.",
  },
  {
    name: "Bandapixels",
    postion: "Backend Engineer",
    years: "June 2022 - September 2022",
    description:
      "My first job with the company. I did an intership as a Node.js developer, developed a Telegram bot to monitor user time, and also design the backend part of the internal application. First of all, I gained experience in teamwork, meeting deadlines, and improving my communication skills.",
  },
];

const stack: { languages: string[]; technologies: Record<string, Array<string>> } = {
  languages: ["TypeScript", "JavaScript"],
  technologies: {
    Frameworks: [
      "Svelte",
      "SvelteKit",
      "TailwindCSS",
      "NestJS",
      "Electron",
      "Nuxt",
      "Next.js",
      "Tauri",
      "Storybook",
      "Chromatic",
    ],
    "Development tools": ["Docker", "TypeORM", "Prisma", "Node.js", "Vite", "React", "Figma"],
    Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    Queue: ["RabbitMQ", "Kafka"],
    "API development & Testing": ["Postman", "Insomnia"],
    VCS: ["Git", "GitHub", "GitLab"],
  },
};

export const load = (() => {
  return { socials, stack, languages, educations, jobs };
}) satisfies PageLoad;
