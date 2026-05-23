<script lang="ts">
  import { browser, dev } from "$app/environment";
  import { page, updated } from "$app/state";
  import * as seo from "$lib/seo/pages";
  import "$lib/styles/core.css";
  import "$lib/styles/fonts.css";
  import "$lib/styles/scrollbar.css";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
  import type { Snippet } from "svelte";
  import Footer from "../components/navigation/Footer.svelte";
  import Header from "../components/navigation/Header.svelte";
  import Confetti from "../components/ui/Confetti.svelte";
  import Update from "../components/ui/Update.svelte";
  import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "../helpers/constants";
  import type { LayoutData } from "./$types";

  let { data, children }: { data: LayoutData; children: Snippet } = $props();

  $effect(() => {
    if (browser && !dev) injectSpeedInsights();
  });

  const date = new Date();

  const robots = $derived(page.status !== 200 ? "noindex, nofollow, nositelinkssearchbox" : "index, follow");

  const title = $derived(page.status !== 200 ? seo.error.title : (page.data.title ?? seo.home.title));

  const description = $derived(
    page.status !== 200 ? seo.error.description : (page.data.description ?? seo.home.description),
  );

  const canonical = $derived(`${SITE_ORIGIN}${page.url.pathname}`);
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />

  <meta name="robots" content={robots} />
  <link rel="canonical" href={canonical} />

  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={OG_IMAGE} />
  <meta property="og:url" content={canonical} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={SITE_NAME} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={OG_IMAGE} />

  {#if data.isAnalyticsEnabled}
    <script async defer src="/api/analytics/umami.js" data-website-id="e107c898-1d93-45b4-b9e8-f8e488489b6b"></script>

    <script async defer src="/api/analytics/rybbit.js" data-site-id="1"></script>
  {/if}
</svelte:head>

<div
  class="pointer-events-none fixed inset-0 -z-10 bg-linear-to-br from-[#121212] to-[#0C0E10]"
  aria-hidden="true"
></div>

<div class="relative flex min-h-dvh flex-col text-white">
  {#if date.getMonth() === 3 && date.getDate() === 28}
    <Confetti />
  {/if}

  <Header />

  <main class="flex grow flex-col">
    {@render children()}
  </main>

  {#if updated.current && !dev}
    <div class="fixed right-0 bottom-10 left-0 z-10 block text-center">
      <Update />
    </div>
  {/if}

  <Footer />
</div>
