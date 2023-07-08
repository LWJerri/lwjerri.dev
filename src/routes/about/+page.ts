import type { PageLoad } from "./$types";

const socialLinks = [
  {
    name: "Telegram",
    icon: "<svg width='45' height='45' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M39.7462 4.56187C39.0847 4.54353 38.4281 4.68165 37.83 4.965L21.6881 11.2087C17.8106 12.7087 13.9387 14.205 10.9556 15.3525C9.17755 16.0404 7.39692 16.7217 5.61373 17.3962C4.82623 17.6719 3.75748 18.0187 2.85186 19.0856C1.48686 20.9006 3.21373 22.4569 4.57498 23.3719C7.59373 24.3394 10.7156 25.2637 13.3012 26.1319C14.2556 29.4937 15.1706 32.8669 16.0762 36.2344C16.3762 36.9094 17.025 37.1606 17.6962 37.1681L17.6925 37.2019C17.6925 37.2019 18.2194 37.2544 18.7331 37.1306C19.3899 36.9634 19.9925 36.6296 20.4825 36.1612C21.1294 35.5537 22.8825 33.8287 23.8781 32.8537L31.3762 38.3888L31.4362 38.4225C31.4362 38.4225 32.265 39.0056 33.48 39.0881C34.0875 39.1294 34.8862 39.0131 35.5725 38.5106C36.2662 38.0044 36.7219 37.1944 36.9375 36.2681C37.5787 33.4706 41.8312 13.2337 42.5569 9.88312L42.5381 9.96187C43.0444 8.07562 42.8569 6.34687 41.685 5.32312C41.1461 4.85278 40.4612 4.58318 39.7462 4.56V4.56187Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>",
    url: "https://t.me/LWJerri",
  },
  {
    name: "Email",
    icon: "<svg width='45' height='45' viewBox='0 0 52 45' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8.57136 8.57141H42.8571C45.2142 8.57141 47.1428 10.5 47.1428 12.8571V38.5714C47.1428 40.9286 45.2142 42.8571 42.8571 42.8571H8.57136C6.21422 42.8571 4.28564 40.9286 4.28564 38.5714V12.8571C4.28564 10.5 6.21422 8.57141 8.57136 8.57141Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/><path d='M47.1428 12.8571L25.7142 27.8571L4.28564 12.8571' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>",
    url: "mailto:hello@lwjerri.dev",
  },
  {
    name: "GitHub",
    icon: "<svg width='45' height='45' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M16.875 35.625C7.5 38.4375 7.5 30.9375 3.75 30M30 41.25V33.9938C30.0703 33.0997 29.9495 32.2009 29.6457 31.3571C29.3418 30.5133 28.8617 29.7439 28.2375 29.1C34.125 28.4438 40.3125 26.2125 40.3125 15.975C40.312 13.3572 39.305 10.8398 37.5 8.94375C38.3547 6.65345 38.2943 4.12191 37.3312 1.87501C37.3312 1.87501 35.1188 1.21876 30 4.65001C25.7025 3.4853 21.1725 3.4853 16.875 4.65001C11.7562 1.21876 9.54375 1.87501 9.54375 1.87501C8.58071 4.12191 8.52027 6.65345 9.375 8.94375C7.55649 10.8538 6.54848 13.394 6.5625 16.0313C6.5625 26.1938 12.75 28.425 18.6375 29.1563C18.0206 29.7937 17.5449 30.5539 17.2412 31.3874C16.9375 32.2208 16.8128 33.1089 16.875 33.9938V41.25' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>",
    url: "https://github.com/LWJerri",
  },
];

const languages = ["TypeScript", "JavaScript", "C++*", "Python*", "PHP*"];

const technologies = {
  "Git & Repositories": ["Git", "GitHub", "GitLab*"],
  "Hosting & Deployment": ["Vercel", "Heroku", "Oracle OCI", "DigitalOcean*", "Netlify*"],
  "Storages S3": ["AWS S3", "Scaleway S3", "MinIO"],
  "API development & Testing": ["Postman", "Insomnia"],
  "Monitoring tools": ["Netdata", "Grafana*"],
  "Relational databases": ["PostgreSQL", "MySQL", "MariaDB*"],
  "Non-relational databases": ["MongoDB", "Redis"],
  "Development tools": [
    "Docker",
    "BullMQ",
    "TypeORM",
    "Prisma",
    "Node.js",
    "Svelte",
    "SvelteKit",
    "Vite",
    "daisyUI",
    "Tailwind CSS",
    "Fastify",
    "NestJS",
    "Express",
    "Electron",
    "Algolia",
    "Flowbite",
    "GitHub Pages",
    "React*",
    "TravisCI*",
    "Nuxt*",
    "Vue.js*",
    "Nginx*",
  ],
  "Team communication tools": ["Volta", "Trello", "Notion", "Obsidian", "Linear*", "Slack*"],
  "Payments providers": ["bill_line", "Stripe*"],
  "Design tools": ["Figma"],
};

export const load = (() => {
  return { socialLinks, languages, technologies };
}) satisfies PageLoad;
