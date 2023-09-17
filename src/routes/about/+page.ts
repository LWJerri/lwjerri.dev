import type { PageLoad } from "./$types";

export const prerender = true;

const socialLinks: Array<{ name: string; icon: string; url: string }> = [
  {
    name: "Telegram",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brand-telegram' width='40' height='40' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4'></path></svg>",
    url: "https://t.me/LWJerri",
  },
  {
    name: "Discord",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brand-discord' width='32' height='32' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0'></path><path d='M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0'></path><path d='M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3'></path><path d='M7 16.5c3.5 1 6.5 1 10 0'></path></svg>",
    url: "https://discordlookup.com/user/432085389948485633",
  },
  {
    name: "Twitch",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brand-twitch' width='32' height='32' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c.266 0 .52 -.105 .707 -.293l2.415 -2.414c.187 -.188 .293 -.442 .293 -.708v-8.585a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1z'></path><path d='M16 8l0 4'></path><path d='M12 8l0 4'></path></svg>",
    url: "https://www.twitch.tv/LWGerry",
  },
  {
    name: "Twitter",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brand-twitter' width='32' height='32' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z'></path></svg>",
    url: "https://twitter.com/LWJerri",
  },
  {
    name: "LinkedIn",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brand-linkedin' width='32' height='32' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z'></path><path d='M8 11l0 5'></path><path d='M8 8l0 .01'></path><path d='M12 16l0 -5'></path><path d='M16 16v-3a2 2 0 0 0 -4 0'></path></svg>",
    url: "https://www.linkedin.com/in/LWJerri",
  },
  {
    name: "Email",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-mail' width='40' height='40' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z'></path><path d='M3 7l9 6l9 -6'></path></svg>",
    url: "mailto:hello@lwjerri.dev",
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
