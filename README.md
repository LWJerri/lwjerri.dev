# lwjerri.dev

This repository contains code that relates to my personal website with information about me, my projects, etc. Vercel is used for hosting, so some features, such as displaying the number of page views, and page metrics, may not work on other hosts.

## Installation Steps

### Requirements

- Installed [Node.js](https://nodejs.org).
- Enabled [corepack](https://nodejs.org/api/corepack.html) or installed `pnpm`.
- Be a member of [Lynard](https://github.com/phineas/lanyard) Discord for footer info.
- Vercel account (Optional if you plane use another hosting).
- Installed [Umami](https://umami.is) (Optional if you plane use another page views tracker).

### Installing

1. Clone this repository: `git clone https://github.com/LWJerri/lwjerri.dev.git`.
2. Install packages: `pnpm i`.
3. Rename `.env.example` to `.env` and configurate file.

- Type into `UMAMI_USERNAME` & `UMAMI_PASSWORD` variables your login credentials from [Umami](https://umami.is/docs/authentication).
- Take `UMAMI_SITE_ID` from Umami website settings.
- To get `KV_REST_API_URL` & `KV_REST_API_TOKEN` you must create [Vercel KV](https://vercel.com/docs/storage/vercel-kv) for your project and retrive all tokens.

> **NOTE:** I'm hosting my portfolio on [Vercel](https://vercel.com) and my website contains some unique features, like [Web Vitals](https://vercel.com/docs/concepts/speed-insights) or [Vercel KV](https://vercel.com/docs/storage/vercel-kv). If you wanna host this website on another platform, please, fork this repository and adapt unique features to your hosting platform.

## Screenshots

### Main Page

![Screenshot #1](https://raw.githubusercontent.com/LWJerri/lwjerri.dev/master/screenshot/main.png)

### Projects Page

![Screenshot #2](https://raw.githubusercontent.com/LWJerri/lwjerri.dev/master/screenshot/projects-1.png)
![Screenshot #3](https://raw.githubusercontent.com/LWJerri/lwjerri.dev/master/screenshot/projects-2.png)

### About Page

![Screenshot #4](https://raw.githubusercontent.com/LWJerri/lwjerri.dev/master/screenshot/about-1.png)
![Screenshot #5](https://raw.githubusercontent.com/LWJerri/lwjerri.dev/master/screenshot/about-2.png)
![Screenshot #6](https://raw.githubusercontent.com/LWJerri/lwjerri.dev/master/screenshot/about-3.png)

## LICENSE

This code has **MIT** license. See the `LICENSE` file for getting more information.
