import type { PageLoad } from "./$types";

interface Project {
  name: string;
  description: string;
  stack: string[];
  emoji?: string;
  url?: string;
  github?: string;
}

const projectsList: Project[] = [
  {
    name: "DUTCalendarTracker",
    description:
      "DUTCalendarTracker can provide easy access to classes from the university website. Get notifications about tomorrow's classes, timetable changes, etc.",
    stack: [
      "CapRover",
      "Docker",
      "TypeScript",
      "grammY",
      "Prisma",
      "BullMQ",
      "Redis",
      "NestJS",
      "ReDoc",
      "JSDom",
      "PostgreSQL",
    ],
    emoji: "📆",
    url: "https://dut-api.lwjerri.ml",
  },
  {
    name: "PoruchBot",
    description:
      "PoruchBot developed special for volunteer organization. This bot performs a key function in the branch of getting help for people who have had to change their place of residence because of the war. This bot asks for basic information about the person, validates the data, searches the databases and prevents possible cheating of the organisation from re-registering. This is very high load bot.",
    stack: ["TypeScript", "CapRover", "Docker", "grammY", "Prisma", "BullMQ", "nodemailer", "Redis", "PostgreSQL"],
    emoji: "🍾",
  },
  {
    name: "SimonBot",
    description:
      "A discord bot that can track user orders and show some additional info about orders. Management of Discord servers, notification of new video on YouTube channels, a tier system based on messages and user activity, fun commands, full moderation suite, real-time table with user data, position rentals and more.",
    stack: ["discord.js", "Prisma", "Canvacord", "discord-logs", "JSDom", "TypeScript", "PostgreSQL"],
    emoji: "🦾",
  },
  {
    name: "MyStorage",
    description:
      "Very useful application for hosting and easy to manage your files in S3 buckets. You can upload, delete or search your files just using the interface application.",
    stack: [
      "Docker",
      "CapRover",
      "Fastify",
      "Prisma",
      "Scaleway S3",
      "TypeScript",
      "Svelte",
      "TailwindCSS",
      "Vite",
      "daisyUI",
      "PostgreSQL",
    ],
    emoji: "💾",
    url: "https://storage.lwjerri.ml",
    github: "https://github.com/LWJerri/MyStorage",
  },
  {
    name: "Pauperial",
    description:
      "Simple tool for making short links and QR-code for your looong links. Reduce your links, get link click-through statistics and more.",
    stack: [
      "Docker",
      "CapRover",
      "express.js",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "Svelte",
      "TailwindCSS",
      "Vite",
      "daisyUI",
    ],
    emoji: "🔗",
    url: "https://pauperial.lwjerri.ml",
    github: "https://github.com/LWJerri/Pauperial",
  },
  {
    name: "LWJENNI",
    description:
      "Discord bot developed special for my brother. The bot manages user roles, which users can select by clicking on a specific button.",
    stack: ["Docker", "CapRover", "discord.js", "Prisma", "TypeScript", "PostgreSQL"],
    emoji: "🥸",
  },
  {
    name: "UserBot",
    description:
      "A script to simplify some activities from my telegram account. My first work with the User API, the script can listen to messages and reply to them under certain conditions.",
    stack: ["Docker", "CapRover", "telegram", "TypeScript"],
    emoji: "🤖",
  },
  {
    name: "lwjerri.dev",
    description: "Source code of my personal website made based on Vite + SvelteKit using TailwindCSS + daisyUI.",
    stack: ["Vercel", "pnpm", "SvelteKit", "TailwindCSS", "TypeScript", "Vite", "daisyUI"],
    emoji: "⭐",
    url: "https://lwjerri.dev",
    github: "https://github.com/LWJerri/lwjerri.dev",
  },
  // {
  //   name: "MagnifyAI",
  //   description: "",
  //   stack: [""],
  // },
  {
    name: "lwjerri.js.org [Deprecated]",
    description:
      "Project with my old website, hosted by GitHub Pages. This is my first personal frontend project with Node.js as a base and other tools for frontend development.",
    stack: ["TravisCI", "GitHub Pages", "Svelte", "Vite", "TailwindCSS", "HTML5", "CSS3", "JavaScript"],
    emoji: "💾",
    url: "https://lwjerri.github.io",
    github: "https://github.com/LWJerri/lwjerri.github.io",
  },
  {
    name: "GTAV [Deprecated]",
    description:
      "Modern platform for GTA V mods creators for upload ans share mods. Users can create accounts, upload mods, like mods, add to favourites, share and comment.",
    stack: [
      "Docker",
      "CapRover",
      "TypeScript",
      "discord.js",
      "Scaleway S3",
      "express.js",
      "PostgreSQL",
      "TypeORM",
      "Svelte",
      "TailwindCSS",
      "Vite",
      "daisyUI",
    ],
    emoji: "📸",
  },
  {
    name: "Riddea [Deprecated]",
    description:
      "Telegram bot for view random anime images and uploads your custom images. Users could both upload their own images and browse other images using different APIs.",
    stack: [
      "Docker",
      "CapRover",
      "Husky",
      "TypeScript",
      "AWS S3",
      "NestJS",
      "Fastify",
      "PostgreSQL",
      "Telegraf.js",
      "TypeORM",
    ],
    emoji: "🔑",
    github: "https://github.com/LWJerri/Riddea",
  },
  {
    name: "Riddea Web [Deprecated]",
    description:
      "The web part for the bot. You could browse your own or someone else's collection of images on the website.",
    stack: ["nginx", "Svelte", "TypeScript", "Vite", "nanostores", "Docker", "CapRover"],
    emoji: "📰",
    url: "https://riddea.ml",
    github: "https://github.com/LWJerri/Riddea",
  },
  {
    name: "Lequille [Deprecated]",
    description:
      "Private Discord bot developed special for my classroom server & telegram group. This bot has one important role - it links the discord and telegram chats and sends messages, photos, videos etc. between the chats. There is also a tier system, creating voice channels and a bunch of minor features.",
    stack: [
      "Docker",
      "CapRover",
      "discord.js",
      "Prisma",
      "Canvacord",
      "discord-logs",
      "grammY",
      "PostgreSQL",
      "TypeScript",
    ],
    emoji: "🤖",
  },
  {
    name: "Modestal [Deprecated]",
    description:
      "Private Discord bot developed special for Twitch streamers Modestal. Chat moderation, stream start notification, ranking system and much more. The project is not currently in development.",
    stack: [
      "Docker",
      "CapRover",
      "discord.js",
      "discord-logs",
      "TypeScript",
      "TypeORM",
      "PostgreSQL",
      "MySQL [In the past]",
    ],
    emoji: "🪣",
  },
  {
    name: "AllStarz [Deprecated]",
    description:
      "Private Discord bot for the closed NFT trading community. This bot manages the monthly user subscription for NFT creators.",
    stack: ["Docker", "CapRover", "discord.js", "PostgreSQL", "TypeORM", "TypeScript", "Stripe"],
    emoji: "💰",
  },
  {
    name: "LoonaSoftBot [Deprecated]",
    description:
      "Special Telegram bot developer for LoonaSoft channel. This bot acts as a subscription manager and processes requests to join the channel.",
    stack: ["GitLab", "Docker", "CapRover", "Stripe", "grammY", "Prisma", "TypeScript"],
    emoji: "🌼",
  },
  {
    name: "ManageGift Web [Deprecated]",
    description:
      "Design for the website of one Discord bot. The site contained information about the bot, the staff, a list of all the teams and some information that was loaded as the page progressed.",
    stack: ["PHP", "JavaScript", "HTML5", "CSS", "OpenServer"],
    emoji: "📃",
  },
  {
    name: "VilStats [Deprecated]",
    description:
      "Windows application for manage information about human stats. This application allows you to do full CRUD with human data through a simple UI interface.",
    stack: ["JavaScript", "PHP", "OpenServer", "HTML5", "CSS"],
    emoji: "📗",
  },
  {
    name: "Openner [Deprecated]",
    description:
      "Private Discord bot developed special for YouTube & Twitch streamer Oxyas. This bot maintains statistics on messages sent, moderates chat, notifies about the beginning of the stream on Twitch and new videos on YouTube. Performs small things like assigning roles, creating private voice channels, etc. It's also one of my first bots, so I was just starting to learn programming at the time.",
    stack: ["discord.js", "discord-logs"],
    emoji: "💿",
  },
  {
    name: "telegraf-rate-limiter [Deprecated]",
    description: "An easy member message rate limiter for the telegraf.js framework.",
    stack: ["telegraf.js", "npmjs.org"],
    emoji: "📦",
    url: "https://www.npmjs.com/package/@lwjerri/telegraf-rate-limiter",
    github: "https://github.com/LWJerri/telegraf-rate-limiter",
  },
];

export const load = (() => {
  return { projectsList };
}) satisfies PageLoad;
