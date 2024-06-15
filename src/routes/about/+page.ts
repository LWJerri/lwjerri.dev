import type { Education, Job } from "../../interfaces";
import type { PageLoad } from "./$types";

const introduction = [
  'Hello, stranger! <span class="text-[#22B8CF]">My name is Andrii, I was born in 2005 in Ukraine</span>,',
  "I graduated from high school in 11th grade and went to university in Kyiv.",
  "I started my way to programming in the 5th grade, when I was playing servers in the popular game Minecraft",
  "and I was very curious to know how it all worked under the hood. One winter, I was walking with my friend Illia and told him",
  "that I supposedly know how to write plugins, and he said it was cool and would like to write them too, after coming home,",
  "I decided to learn how to do it in reality. That is how out of sheer interest I started writing code and I love it so much!",
  'I chose backend development because <span class="text-[#22B8CF]">I am interested in knowing how the product works "behind the scenes"</span>,',
  "in a place where the user sees nothing and does not know how the information is processed, how it is stored, etc.",
];

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

const socials: Record<string, string> = {
  telegram: "https://t.me/LWJerri",
  discord: "https://discordlookup.com/user/432085389948485633",
  twitch: "https://www.twitch.tv/LWGerry",
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
    Frameworks: ["Svelte", "SvelteKit", "TailwindCSS", "NestJS", "Electron", "Nuxt", "Next.js"],
    "Development tools": ["Docker", "TypeORM", "Prisma", "Node.js", "Vite", "React", "Figma"],
    Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    "API development & Testing": ["Postman", "Insomnia"],
    VCS: ["Git", "GitHub", "GitLab"],
  },
};

export const load = (() => {
  return { socials, stack, introduce: introduction, languages, educations, jobs };
}) satisfies PageLoad;
