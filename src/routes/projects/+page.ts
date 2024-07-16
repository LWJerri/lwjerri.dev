import type { Project } from "../../interfaces";
import type { PageLoad } from "./$types";

const projects: Project[] = [
  {
    name: "VilStats",
    description:
      "A Windows application designed to keep records of citizens in small residential areas, such as villages or townships. The application contains a form for filling in all the necessary information and a table that can be sorted by the required data.",
    stack: ["JavaScript", "PHP", "jQuery", "HTML", "CSS"],
    isClosed: true,
  },
  {
    name: "GTAV",
    description:
      "Service for downloading, storing and distributing modifications for the game GTA V. The service has the functionality of a personal account, page downloaded modification and all the necessary basic information.",
    stack: [
      "TypeScript",
      "Docker",
      "Svelte",
      "TailwindCSS",
      "Vite",
      "daisyUI",
      "AWS S3",
      "discord.js",
      "Express",
      "PostgreSQL",
      "TypeORM",
      "CapRover CI/CD",
    ],
    isClosed: true,
  },
  {
    name: "JeelangaMusic",
    description:
      "A simple and easily customizable Discord bot that has the ability to play audio from YouTube videos in voice chat servers.",
    stack: ["JavaScript", "discord.js", "Express", "FFmpeg", "CapRover CI/CD"],
    isClosed: true,
    github: "https://github.com/LWJerri/JeelangaMusic",
  },
  {
    name: "Sreality",
    description:
      "A site that parses data from the sreality.cz website and displays it in the form of a list of cards with all the necessary information. This project was developed as a test work for Luxonis company.",
    stack: ["TypeScript", "Docker", "React", "TailwindCSS", "PostgreSQL", "Prisma", "Fastify"],
    isClosed: true,
    github: "https://github.com/LWJerri/Sreality",
  },
  {
    name: "Riddea",
    description:
      "A service that has a Telegram bot with functionality for viewing images from other services and the ability to upload your own photos and view photos from other members. There is also a website where you can view photos uploaded by users.",
    stack: [
      "TypeScript",
      "Docker",
      "Husky",
      "Svelte",
      "Vite",
      "CSS",
      "AWS S3",
      "Fastify",
      "PostgreSQL",
      "TypeORM",
      "telegraf.js",
      "NestJS Microservice",
      "GitHub Workflows CI/CD",
    ],
    isClosed: true,
    github: "https://github.com/LWJerri/Riddea",
  },
  {
    name: "AllStarz",
    description:
      "A Discord bot developed for a closed NFT selling community, acting as a monitoring bot for user subscriptions, verifying users, and billing for payment.",
    stack: ["TypeScript", "Docker", "discord.js", "PostgreSQL", "TypeORM", "Stripe", "CapRover CI/CD"],
    isClosed: true,
  },
  {
    name: "Openner",
    description:
      "My first Discord bot, which was designed for streamer Oxyas. It has all the basic functions of server moderation, creating voice channels, playing music, level system and more.",
    stack: ["JavaScript", "discord.js"],
    isClosed: true,
  },
  {
    name: "telegraf-rate-limiter",
    description:
      "A simple package for Telegraf.js, based on the discord.js-rate-limiter package. The functionality is incredibly simple - limiting access to some bot functions by time.",
    stack: ["TypeScript", "npmjs", "GitHub Workflows", "telegraf.js"],
    isClosed: true,
    github: "https://github.com/LWJerri/telegraf-rate-limiter",
  },
  {
    name: "MagnifyAI",
    description:
      "Telegram bot that was supposed to use AI to generate photos and process audio sent to it by users. The project was not realized to the end because the service that provided the models was shut down.",
    stack: ["TypeScript", "Docker", "BullMQ", "Prisma", "MongoDB", "grammY", "Redis", "bill_line"],
    isClosed: true,
  },
  {
    name: "api.lwjerri.dev",
    description:
      "A simple API to count the number of visits to my site on a per page basis. Unique ID was calculated based on IP and other some data, but became unnecessary through its unreliability and more successful replacement Umami.",
    stack: ["TypeScript", "Docker", "Fastify", "Prisma", "PostgreSQL", "CapRover CI/CD"],
    isClosed: true,
    github: "https://github.com/LWJerri/api.lwjerri.dev",
  },
  {
    name: "Modestal",
    description:
      "A private Discord bot that was developed for Twitch streamers Modestal with the ability to moderate chat, conduct lotteries, notify about streams, etc. The project was closed through the breakup of the streamer team.",
    stack: ["TypeScript", "Docker", "discord.js", "TypeORM", "PostgreSQL", "Redis", "CapRover CI/CD"],
    isClosed: true,
  },
  {
    name: "lwjerri.github.io",
    description:
      "The site with my old portfolio, which currently only contains the information that my portfolio is on a new domain.",
    stack: ["TypeScript", "GitHub Pages", "Svelte", "Vite", "CSS"],
    isClosed: true,
    github: "https://github.com/LWJerri/lwjerri.github.io",
    urls: ["https://lwjerri.js.org", "https://lwjerri.github.io"],
  },
  {
    name: "PoruchBot",
    description:
      "A highly loaded Telegram bot for conducting entries for humanitarian aid, designed specifically for a charitable organization. The bot successfully withstood a load of 60 thousand users.",
    stack: ["TypeScript", "Docker", "grammY", "Prisma", "PostgreSQL", "BullMQ", "Redis", "CapRover CI/CD"],
    isClosed: true,
  },
  {
    name: "RconOnlineNotifier",
    description:
      "Simple script for tracking online on Minecraft server with subsequent notification of users in Telegram chat.",
    stack: ["TypeScript", "Docker", "Rcon", "CapRover CI/CD"],
    isClosed: true,
    github: "https://github.com/LWJerri/RconOnlineNotifier",
  },
  {
    name: "jj",
    description:
      "Coursework that I customized for an acquaintance of mine. The service contains the main page and a page with orders and some other additional information.",
    stack: ["TypeScript", "Docker", "Next", "React", "TailwindCSS", "daisyUI", "MongoDB", "NestJS"],
    isClosed: true,
    github: "https://github.com/LWJerri/jj",
  },
  {
    name: "UserBot",
    description:
      "A private script for my Telegram account, which contains some auxiliary functions for my comfortable time in messenger.",
    stack: ["TypeScript", "Docker", "Prisma", "PostgreSQL", "gramJS", "CapRover CI/CD"],
    isClosed: true,
  },
  {
    name: "React-App",
    description:
      "Project from the first phase of test assignments for Radency for the position of FullStack Developer. There is a possibility to create lists and tasks within the list. Full UI flexibility and system fault tolerance is supported.",
    stack: [
      "TypeScript",
      "Docker",
      "OpenAPI",
      "React",
      "TailwindCSS",
      "Zustand",
      "Vite",
      "shadcn/ui",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "GitHub Actions CI/CD",
    ],
    isClosed: true,
    github: "https://github.com/LWJerri/React-App",
  },
  {
    name: "FindID",
    description:
      "An application that builds on Windows that I developed while working at Amazon FC. This application makes it easy to search for containers in a warehouse by their id. There is a feature to instantly retrieve all id's from a message that contains additional text. This app should have been vetted by security before it was integrated into the warehouse ecosystem, but that didn't happen due to me leaving my job.",
    stack: ["TypeScript", "shadcn/ui", "React", "Tauri", "TailwindCSS", "Vite", "GitHub Actions"],
    isClosed: true,
    github: "https://github.com/LWJerri/FindID",
  },
  {
    name: "React-App-2",
    description:
      "The second part of the test work for Radency. The whole functionality of the first part of the application is present, except for small changes and Storybook extraction.",
    stack: [
      "TypeScript",
      "Docker",
      "OpenAPI",
      "React",
      "shadcn/ui",
      "TailwindCSS",
      "Zustand",
      "Storybook",
      "Vite",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Jest",
      "GitHub Actions CI/CD",
    ],
    isClosed: true,
    github: "https://github.com/LWJerri/React-App-2",
  },
  {
    name: "TimetableAssistantDUIKT",
    description:
      "A project I developed for easy access to my university's class schedule. The project consists of two parts - Telegram bot and API. The bot can track all actions in the schedule, notify about upcoming classes and more, and the API is supported for third-party developers who will want to use the service, because here the logic of data caching is implemented. So, during any problems with the schedule on the university website, my service will continue to provide all the necessary information to students without any problems.",
    stack: [
      "TypeScript",
      "Docker",
      "grammY",
      "BullMQ",
      "Redis",
      "Prisma",
      "PostgreSQL",
      "NestJS",
      "JSDom",
      "CapRover CI/CD",
    ],
    isClosed: false,
    urls: [
      "https://tta-duikt-api.oracle-1.lwjerri.dev/swagger-stats",
      "https://tta-duikt-api.oracle-1.lwjerri.dev",
      "https://t.me/DuiktTrackBot",
    ],
  },
  {
    name: "CSharpBoard",
    description:
      "A project designed for my coursework. C# programming language was used for the backend part and Node.js for the frontend part. This project is a simple ToDo application with a nice and adaptive UI with high fault tolerance.",
    stack: [
      "TypeScript",
      "C#",
      "OpenAPI",
      "React",
      "Zustand",
      "TailwindCSS",
      "Vite",
      "PostgreSQL",
      "NET 8.0",
      "Npgsql",
      "GitHub Actions CI/CD",
    ],
    isClosed: true,
    github: "https://github.com/LWJerri/CSharpBoard",
  },
  {
    name: "SimonBot",
    description:
      "Powerful Discord bot for easy inventory management of members' items, YouTube and Twitch alerts, a level system for chatting, and integration with GTA V and more.",
    stack: ["TypeScript", "Docker", "Prisma", "PostgreSQL", "discord.js", "JSDom", "CapRover CI/CD"],
    isClosed: false,
  },
  {
    name: "Lequille",
    description:
      "A private Discord bot that I developed for my group while still in school to link Discord and Telegram chats. There are also additional features in the form of a level system and voice chat management.",
    stack: ["TypeScript", "Docker", "discord.js", "Prisma", "MongoDB", "CapRover CI/CD"],
    isClosed: true,
  },
  {
    name: "MyStorage",
    description:
      "A comprehensive storage solution utilizing modern web technologies and cloud infrastructure. The app has a user-friendly UI and is compatible with most S3 storage.",
    stack: [
      "TypeScript",
      "Docker",
      "Svelte",
      "TailwindCSS",
      "Vite",
      "daisyUI",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "AWS S3",
      "CapRover CI/CD",
    ],
    isClosed: false,
    github: "https://github.com/LWJerri/MyStorage",
  },
  {
    name: "LWJENNI",
    description:
      "Discord bot developed special for my brother. It contains a special function of creating tables with pre-filled data and their subsequent editing.",
    stack: ["TypeScript", "Docker", "Prisma", "PostgreSQL", "discord.js", "CapRover CI/CD"],
    isClosed: false,
  },
  {
    name: "Pauperial",
    description:
      "A simple service for shortening long links. The project was temporarily shut down due to attempts to use the service in gray schemes of malware transmission.",
    stack: [
      "TypeScript",
      "Docker",
      "Svelte",
      "TailwindCSS",
      "Vite",
      "daisyUI",
      "TypeORM",
      "PostgreSQL",
      "Express",
      "CapRover CI/CD",
    ],
    isClosed: false,
    github: "https://github.com/LWJerri/Pauperial",
  },
  {
    name: "LoonaSoftBot",
    description:
      "A private Telegram bot for the LoonaSoft model, acting as a subscription manager for a private channel, billing monthly subscriptions and taking surveys.",
    stack: ["TypeScript", "Docker", "Stripe", "grammY", "Prisma", "PostgreSQL", "Redis", "CapRover CI/CD"],
    isClosed: true,
  },
  {
    name: "dogttpbot",
    description:
      "An incredibly simple Telegram bot I developed to learn how to work with webhooks. This bot responds to inline requests with pictures of dogs that respond to a certain HTTP code.",
    stack: ["TypeScript", "Vercel", "grammY", "Express", "ngrok"],
    isClosed: false,
    github: "https://github.com/LWJerri/dogttpbot",
    urls: ["https://t.me/dogttpbot"],
  },
  {
    name: "novaosvita.net",
    description:
      "A project dedicated to the development of universities in Ukraine, which collects reviews on various educational institutions, reviews of students and teachers. The project was closed by its owner without any reasons.",
    stack: ["TypeScript", "Flowbite", "Vue", "TailwindCSS", "Vite", "Portmone"],
    isClosed: true,
  },
  {
    name: "lwjerri.dev",
    description:
      "My personal portfolio site with all the necessary basic information about me, my projects, my education, my work and much, much more.",
    stack: ["TypeScript", "Vercel", "Umami", "PDFkit", "SvelteKit", "TailwindCSS", "Vite"],
    isClosed: false,
    github: "https://github.com/LWJerri/lwjerri.dev",
    urls: ["https://lwjerri.dev"],
  },
  {
    name: "ManageGift",
    description:
      "Discord bot for conducting raffles among server members. The bot has flexible message customization, supports several languages and performs its work efficiently.",
    stack: ["JavaScript", "MongoDB", "Express", "discord.js", "PHP", "HTML", "CSS", "GitHub Actions CI/CD"],
    isClosed: true,
  },
  {
    name: "doctoo",
    description:
      "A project I developed in a team of 11 people over the course of a month. This service serves as a platform for searching for doctors by symptoms, making appointments, communication between doctor and patient, and more.",
    stack: [
      "TypeScript",
      "Docker",
      "GCP",
      "NestJS Microservice",
      "NestJS",
      "RabbitMQ",
      "Jest",
      "Stripe",
      "OpenAPI",
      "React",
      "Storybook",
      "Chromatic",
      "JSDom",
      "TailwindCSS",
      "Vite",
      "Vitest",
      "ReDoc",
      "Nodemailer",
      "Redis",
      "PostgreSQL",
      "Prisma",
      "Tesseract",
      "Minio",
      "Angular",
      "Google S3",
      "Karma",
      "GitHub Actions CI/CD",
      "OpenAI",
    ],
    isClosed: true,
  },
].sort((a, b) => {
  if (a.isClosed !== b.isClosed) return a.isClosed ? 1 : -1;

  return a.name.localeCompare(b.name);
});

export const load = (() => {
  return { projects };
}) satisfies PageLoad;
