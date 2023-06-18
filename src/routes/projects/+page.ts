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
      "DUTCalendarTracker is a friendly companion that keeps effortlessly connected with university life. Stay in the loop with tomorrow's classes, anticipate any timetable adjustments, and receive timely notifications that make managing the schedule a breeze. With its user-friendly interface never miss a beat as you navigate through your academic journey. Let DUTCalendarTracker be your trusted sidekick, simplifying the university experience one notification at a time.",
    stack: [
      "TypeScript",
      "Git",
      "GitHub",
      "Oracle OCI",
      "Insomnia",
      "PostgreSQL",
      "Redis",
      "Docker",
      "BullMQ",
      "Prisma",
      "Node.js",
      "NestJS",
    ],
    emoji: "📆",
    url: "https://dut-api.lwjerri.ml",
  },
  {
    name: "PoruchBot",
    description:
      "PoruchBot is a dedicated helping hand designed exclusively for a volunteer organization. It plays a crucial role in supporting individuals who have been forced to relocate due to the impact of war. This bot collects essential information, verifies the data, and diligently searches through databases, ensuring the organization's resources are allocated to those who genuinely need assistance. With its robust capabilities, PoruchBot efficiently prevents any potential misuse of the organization's services. Operating seamlessly even under high demand, this bot stands as a reliable pillar of support, offering hope and relief to those affected by war-induced displacement.",
    stack: [
      "TypeScript",
      "Git",
      "GitHub",
      "Oracle OCI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "BullMQ",
      "Prisma",
      "Node.js",
      "Notion",
    ],
    emoji: "🍾",
  },
  {
    name: "SimonBot",
    description:
      "Incredible Discord bot that enhances your server experience. It efficiently manages user orders and offers new YouTube video notifications, interactive tier rewards, entertaining commands, comprehensive moderation tools, real-time user data, and position rentals. Unlock a world of possibilities with this feature-packed and friendly Discord bot, a standout addition to my portfolio.",
    stack: ["TypeScript", "Git", "GitHub", "Oracle OCI", "PostgreSQL", "Docker", "Prisma", "Node.js"],
    emoji: "🦾",
  },
  {
    name: "MyStorage",
    description:
      "A handy application for easy placement and management of files in S3 buckets. Easily upload, delete and search for files using the simple interface. Simplify file management tasks and unleash the full potential of S3 buckets. Perfect for all users and makes it easy to manage files with our intuitive interface. This app is designed to show you how easy it is to use S3 resources for your needs!",
    stack: [
      "TypeScript",
      "Git",
      "GitHub",
      "Oracle OCI",
      "AWS S3",
      "Scaleway S3",
      "MinIO",
      "Postman",
      "PostgreSQL",
      "Docker",
      "Prisma",
      "Node.js",
      "Svelte",
      "Vite",
      "daisyUI",
      "Tailwind CSS",
      "Express",
      "Figma",
    ],
    emoji: "💾",
    url: "https://storage.lwjerri.ml",
    github: "https://github.com/LWJerri/MyStorage",
  },
  {
    name: "Pauperial",
    description:
      "Easy-to-use link management tool that simplifies your online experience. Quickly convert long URLs into sleek, shareable short links with just a few clicks. Gain valuable insights into link performance through click-through statistics for effective tracking and analysis. Say goodbye to lengthy URLs and embrace convenient link management. Create eye-catching QR codes that seamlessly connect the physical and digital worlds. Unlock a world of possibilities with an efficient and user-friendly link management tool.",
    stack: [
      "TypeScript",
      "Git",
      "GitHub",
      "Oracle OCI",
      "Insomnia",
      "PostgreSQL",
      "Docker",
      "TypeORM",
      "Node.js",
      "Svelte",
      "Vite",
      "daisyUI",
      "Tailwind CSS",
      "Express",
    ],
    emoji: "🔗",
    url: "https://pauperial.lwjerri.ml",
    github: "https://github.com/LWJerri/Pauperial",
  },
  {
    name: "LWJENNI",
    description:
      "Delightful Discord bot, created with love for my brother. This bot takes role management to a whole new level, allowing users to easily select their preferred roles with a simple click of a button. No more hassle or confusion - this bot streamlines the process, making it a breeze to personalize your Discord experience. Whether you're a gamer, a music lover, or an anime enthusiast, our friendly bot ensures that you're always part of the right community.",
    stack: ["TypeScript", "Git", "GitHub", "Heroku", "PostgreSQL", "Docker", "Prisma", "Node.js"],
    emoji: "🥸",
  },
  {
    name: "UserBot",
    description:
      "The script simplifies Telegram activities through the User API. This script efficiently listens to messages and provides automatic replies based on specific conditions. Additionally, it seamlessly integrates with the Spotify API, allowing for the automatic addition of Spotify links to a personal playlist. A remarkable addition to my portfolio, showcasing my inaugural project with the User API and the integration of Spotify functionality.",
    stack: ["TypeScript", "Git", "GitHub", "Heroku", "Docker", "Node.js"],
    emoji: "🤖",
  },
  {
    name: "lwjerri.dev",
    description:
      "The source code of my personal website is built on Vite + SvelteKit and styled with TailwindCSS + daisyUI. A sleek and modern website that showcases my portfolio and personal information.",
    stack: [
      "TypeScript",
      "Git",
      "GitHub",
      "Vercel",
      "Insomnia",
      "Redis",
      "Node.js",
      "SvelteKit",
      "Vite",
      "daisyUI",
      "Tailwind CSS",
    ],
    emoji: "✨",
    url: "https://lwjerri.dev",
    github: "https://github.com/LWJerri/lwjerri.dev",
  },
  {
    name: "lwjerri.js.org",
    description:
      "My old website project, hosted on GitHub Pages, showcases my first personal front-end development using Node.js as the foundation. It incorporates various tools for front-end development, resulting in an engaging and interactive website.",
    stack: ["JavaScript", "Git", "GitHub", "TravisCI", "GitHub Pages", "Svelte", "Vite", "HTML&CSS"],
    closed: true,
    url: "https://lwjerri.github.io",
    github: "https://github.com/LWJerri/lwjerri.github.io",
  },
  {
    name: "GTAV",
    description:
      "Introducing a modern platform for GTA V mod creators, providing a seamless experience for uploading and sharing mods. Users can create accounts, upload their mods, like and add mods to favorites, share them, and engage in discussions through comments.",
    stack: [
      "TypeScript",
      "Git",
      "GitHub",
      "Oracle OCI",
      "Scaleway S3",
      "Postman",
      "PostgreSQL",
      "Docker",
      "TypeORM",
      "Node.js",
      "Svelte",
      "Vite",
      "daisyUI",
      "Tailwind CSS",
      "Express",
    ],
    closed: true,
  },
  {
    name: "Riddea",
    description:
      "The Telegram bot that allows users to view random anime images and upload their own custom images. The bot utilizes various APIs to provide a wide range of anime images for browsing. Additionally, the project includes a website where users can access all images, collections, and more.",
    stack: [
      "TypeScript",
      "Git",
      "GitHub",
      "Oracle OCI",
      "Scaleway S3",
      "Postman",
      "PostgreSQL",
      "Docker",
      "TypeORM",
      "Node.js",
      "Svelte",
      "Vite",
      "daisyUI",
      "Tailwind CSS",
      "NestJS",
      "Nginx",
    ],
    closed: true,
    url: "https://riddea.ml",
    github: "https://github.com/LWJerri/Riddea",
  },
  {
    name: "Lequille",
    description:
      "Private Discord bot designed specifically for a classroom server and Telegram group. This bot plays a crucial role in linking the Discord and Telegram chats, facilitating seamless communication by sending messages, photos, videos, and more between the two platforms. Additionally, it features a tier system, creates voice channels, and offers a range of minor yet valuable features for enhanced functionality.",
    stack: ["TypeScript", "Git", "GitHub", "Oracle OCI", "PostgreSQL", "Docker", "Prisma", "Node.js"],
    closed: true,
  },
  {
    name: "Modestal",
    description:
      "Introducing a private Discord bot specifically developed for Twitch streamer Modestal. This bot provides essential chat moderation features, sends stream start notifications, incorporates a ranking system, and offers additional functionalities. Please note that the project is currently not in active development.",
    stack: ["TypeScript", "Git", "GitHub", "Heroku", "MariaDB", "Docker", "TypeORM", "Node.js"],
    closed: true,
  },
  {
    name: "AllStarz",
    description:
      "A private Discord bot exclusively designed for a closed NFT trading community. This bot handles monthly user subscriptions for NFT creators, ensuring seamless management within the community.",
    stack: ["TypeScript", "Git", "GitHub", "DigitalOcean", "PostgreSQL", "Docker", "TypeORM", "Node.js", "Stripe"],
    closed: true,
  },
  {
    name: "LoonaSoftBot",
    description:
      "The Telegram bot developed for the LoonaSoft channel. This bot serves as a subscription manager and efficiently processes join requests for the channel.",
    stack: ["TypeScript", "Git", "GitHub", "Oracle OCI", "PostgreSQL", "Docker", "Prisma", "Node.js", "Stripe"],
    closed: true,
  },
  {
    name: "ManageGift",
    description:
      "Introducing a website design for a Discord bot, featuring essential information about the bot, its staff, a comprehensive team list, and dynamically loaded information. Additionally, a PHP website is available with detailed bot commands, bot developers, and more.",
    stack: ["JavaScript", "PHP", "Git", "GitHub", "HTML&CSS", "OpenServer", "Node.js", "MongoDB"],
    closed: true,
  },
  {
    name: "VilStats",
    description:
      "Windows application designed for managing human statistics. This application offers a user-friendly interface for performing full CRUD operations on human data. Simplify the process of creating, reading, updating, and deleting human information with ease.",
    stack: ["PHP", "JavaScript", "Git", "GitHub", "HTML&CSS"],
    closed: true,
  },
  {
    name: "Openner",
    description:
      "Introducing a Discord bot tailored for YouTube and Twitch streamer Oxyas. This bot tracks message statistics, moderates chat, and provides notifications for Twitch stream start and new YouTube videos. It also handles role assignments, private voice channel creation, and other miscellaneous tasks. This project marked one of my initial forays into programming as I began learning the ropes.",
    stack: ["JavaScript", "Git", "GitHub", "Heroku", "MySQL", "Docker", "TypeORM", "Node.js"],
    closed: true,
  },
  {
    name: "MagnifyAI",
    description:
      "Introducing a Telegram bot specifically developed for seamless integration with the AI Replicate platform. Simplify your AI tasks and enhance your workflow with this powerful bot.",
    stack: [
      "TypeScript",
      "Git",
      "GitHub",
      "Scaleway S3",
      "Insomnia",
      "PostgreSQL",
      "Redis",
      "Docker",
      "BullMQ",
      "Prisma",
      "Node.js",
      "bill_line",
    ],
    closed: true,
  },
  {
    name: "Sreality",
    description:
      "Simple web app developed as a test task for Luxonisu, designed to seamlessly integrate with the Sreality website. Enhance your experience with Sreality by leveraging the functionalities of this web app.",
    stack: [
      "TypeScript",
      "Git",
      "GitHub",
      "PostgreSQL",
      "Docker",
      "Prisma",
      "Node.js",
      "React",
      "daisyUI",
      "Tailwind CSS",
    ],
    closed: true,
    github: "https://github.com/LWJerri/Sreality",
  },
];

export const load = (() => {
  return { projects };
}) satisfies PageLoad;
