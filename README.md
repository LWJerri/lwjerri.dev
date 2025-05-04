# lwjerri.dev

This repository contains code that relates to my personal website with information about me, my projects, etc. Vercel is used for hosting, so some features, such as speed insights, may not work on other hosts.

## Installation Steps

### Requirements

- Installed [Node.js](https://nodejs.org).
- Enabled [corepack](https://nodejs.org/api/corepack.html) or installed `pnpm` manually.
- Be a member of [Lynard](https://github.com/phineas/lanyard) Discord server to receive presence updates for footer.
- Vercel account (Optional if you plane use another hosting).
- Installed [Umami](https://umami.is) (Optional if you plane use another metrics collector).

### Installing

1. Clone this repository: `git clone https://github.com/LWJerri/lwjerri.dev.git`.
2. Install required dependencies: `pnpm i`.
3. Create `.env` file in root of project and paste all data from `.env.example`.
4. Configurate required environments.

- Value for `UMAMI_SECRET` environment must be same as for `APP_SECRET`. See [Umami Environment Variables](https://umami.is/docs/api/api-client#environment-variables).
- Your `UMAMI_ENDPOINT` will be `http(s)://<your-domain>/api`.
- Take `UMAMI_SITE_ID` & `UMAMI_USER_ID` from Umami settings.

> **NOTE:** I'm hosting my portfolio on [Vercel](https://vercel.com) and my website contains some unique features, like [Speed Insights](https://vercel.com/docs/speed-insights). If you wanna host this website on another platform, please, fork this repository and adapt these features to your hosting platform.

## Color Palette

| Color HEX                                  | Usage                                        |
| ------------------------------------------ | -------------------------------------------- |
| `#ED4245`                                  | Used when user hover on interactive element. |
| `#5862F2`                                  | Highlight important text, etc.               |
| `#121212`, `#0C0E10`                       | Background gradient.                         |
| `#6F6B67`, `#2A2929`, `#252925`, `#595552` | Custom scrollbar colors                      |

## Screenshots

![Main Page Screenshot](https://raw.githubusercontent.com/LWJerri/lwjerri.dev/master/screenshot/main.png)
![About Page Screenshot](https://raw.githubusercontent.com/LWJerri/lwjerri.dev/master/screenshot/about.png)
![Projects Page Screenshot](https://raw.githubusercontent.com/LWJerri/lwjerri.dev/master/screenshot/projects.png)

## LICENSE

This code has **MIT** license. See the `LICENSE` file for getting more information.
