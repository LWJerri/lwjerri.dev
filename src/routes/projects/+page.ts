import type { PageLoad } from "./$types";

interface Project {
  name: string;
  description: string;
  stack: string[];
  closed?: boolean;
  emoji?: string;
  url?: string;
  github?: string;
}

const projects: Project[] = [
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
      "PoruchBot was developed especially for a volunteer organization. This bot performs a key function in the branch of getting help for people who have had to change their place of residence because of the war. This bot asks for basic information about the person, validates the data, searches the databases, and prevents possible cheating of the organization from re-registering. This is a very high-load bot.",
    stack: ["TypeScript", "CapRover", "Docker", "grammY", "Prisma", "BullMQ", "Redis", "PostgreSQL"],
    emoji: "🍾",
  },
  {
    name: "SimonBot",
    description:
      "A discord bot that can track user orders and show some additional info about orders. Management of Discord servers, notification of new videos on YouTube channels, a tier system based on messages and user activity, fun commands, full moderation suite, real-time table with user data, position rentals, and more.",
    stack: ["discord.js", "Prisma", "Canvacord", "JSDom", "TypeScript", "PostgreSQL"],
    emoji: "🦾",
  },
  {
    name: "MyStorage",
    description:
      "Handy application for hosting and easy to manage your files in S3 buckets. You can upload, delete or search your files just by using the interface application.",
    stack: [
      "Docker",
      "CapRover",
      "Fastify",
      "Prisma",
      "AWS S3",
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
      "Simple tool for making short links and QR-code for your long links. Reduce your links, get link click-through statistics, and more.",
    stack: [
      "Docker",
      "CapRover",
      "Express.js",
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
      "Discord bot developed especially for my brother. The bot manages user roles, which users can select by clicking on a specific button.",
    stack: ["Docker", "CapRover", "discord.js", "Prisma", "TypeScript", "PostgreSQL"],
    emoji: "🥸",
  },
  {
    name: "UserBot",
    description:
      "A script to simplify some activities from my telegram account. This is my first work with the User API, the script can listen to messages and reply to them under certain conditions.",
    stack: ["Docker", "CapRover", "GramJS", "TypeScript"],
    emoji: "🤖",
  },
  {
    name: "lwjerri.dev",
    description: "The source code of my personal website made based on Vite + SvelteKit using TailwindCSS + daisyUI.",
    stack: ["Vercel", "SvelteKit", "TailwindCSS", "TypeScript", "Vite", "daisyUI"],
    emoji: "✨",
    url: "https://lwjerri.dev",
    github: "https://github.com/LWJerri/lwjerri.dev",
  },
  {
    name: "lwjerri.js.org",
    description:
      "Project with my old website, hosted by GitHub Pages. This is my first personal front-end project with Node.js as a base and other tools for front-end development.",
    stack: ["TravisCI", "GitHub Pages", "Svelte", "Vite", "TailwindCSS", "HTML&CSS", "JavaScript"],
    closed: true,
    emoji: "💾",
    url: "https://lwjerri.github.io",
    github: "https://github.com/LWJerri/lwjerri.github.io",
  },
  {
    name: "GTAV",
    description:
      "A modern platform for GTA V mod creators to upload and share mods. Users can create accounts, upload mods, like mods, add to favorites, share, and comment.",
    stack: [
      "Docker",
      "CapRover",
      "TypeScript",
      "discord.js",
      "AWS S3",
      "Express.js",
      "PostgreSQL",
      "TypeORM",
      "Svelte",
      "TailwindCSS",
      "Vite",
      "daisyUI",
    ],
    closed: true,
    emoji: "📸",
  },
  {
    name: "Riddea",
    description:
      "Telegram bot for viewing random anime images and uploading your custom images. Users could both upload their own images and browse other images using different APIs.",
    stack: [
      "Docker",
      "CapRover",
      "Husky",
      "TypeScript",
      "AWS S3",
      "NestJS",
      "Fastify",
      "PostgreSQL",
      "telegraf.js",
      "TypeORM",
    ],
    closed: true,
    emoji: "🔑",
    github: "https://github.com/LWJerri/Riddea",
  },
  {
    name: "Riddea Web",
    description:
      "The web part for the bot. You could browse your own or someone else's collection of images on the website.",
    stack: ["Nginx", "Svelte", "TypeScript", "Vite", "Docker", "CapRover"],
    closed: true,
    emoji: "📰",
    url: "https://riddea.ml",
    github: "https://github.com/LWJerri/Riddea",
  },
  {
    name: "Lequille",
    description:
      "Private Discord bot developed especially for my classroom server & telegram group. This bot has one important role - it links the discord and telegram chats and sends messages, photos, videos, etc. between the chats. There is also a tier system, creating voice channels and a bunch of minor features.",
    stack: ["Docker", "CapRover", "discord.js", "Prisma", "Canvacord", "grammY", "PostgreSQL", "TypeScript"],
    closed: true,
    emoji: "🤖",
  },
  {
    name: "Modestal",
    description:
      "Private Discord bot developed especially for Twitch streamers Modestal. Chat moderation, stream start notification, ranking system, and much more. The project is not currently in development.",
    stack: ["Docker", "CapRover", "discord.js", "TypeScript", "TypeORM", "PostgreSQL"],
    closed: true,
    emoji: "🪣",
  },
  {
    name: "AllStarz",
    description:
      "Private Discord bot for the closed NFT trading community. This bot manages the monthly user subscription for NFT creators.",
    stack: ["Docker", "CapRover", "discord.js", "PostgreSQL", "TypeORM", "TypeScript", "Stripe"],
    closed: true,
    emoji: "💰",
  },
  {
    name: "LoonaSoftBot",
    description:
      "Special Telegram bot developer for the LoonaSoft channel. This bot acts as a subscription manager and processes requests to join the channel.",
    stack: ["Docker", "CapRover", "Stripe", "grammY", "Prisma", "TypeScript"],
    closed: true,
    emoji: "🌼",
  },
  {
    name: "ManageGift Web",
    description:
      "Design for the website of one Discord bot. The site contained information about the bot, the staff, a list of all the teams, and some information that was loaded as the page progressed.",
    stack: ["PHP", "JavaScript", "HTML&CSS", "OpenServer"],
    closed: true,
    emoji: "📃",
  },
  {
    name: "VilStats",
    description:
      "Windows application for managing information about human stats. This application allows you to do full CRUD with human data through a simple UI interface.",
    stack: ["JavaScript", "PHP", "OpenServer", "HTML&CSS"],
    closed: true,
    emoji: "📗",
  },
  {
    name: "Openner",
    description:
      "Private Discord bot developed especially for YouTube & Twitch streamer Oxyas. This bot maintains statistics on messages sent, moderates chat, and notifies about the beginning of the stream on Twitch and new videos on YouTube. Performs small things like assigning roles, creating private voice channels, etc. It's also one of my first bots, so I was just starting to learn programming at the time.",
    stack: ["discord.js"],
    closed: true,
    emoji: "💿",
  },
  {
    name: "telegraf-rate-limiter",
    description: "An easy member message rate limiter for the telegraf.js framework.",
    stack: ["telegraf.js", "npmjs"],
    closed: true,
    emoji: "📦",
    url: "https://www.npmjs.com/package/@lwjerri/telegraf-rate-limiter",
    github: "https://github.com/LWJerri/telegraf-rate-limiter",
  },
];

export const load = (() => {
  return { projects };
}) satisfies PageLoad;
