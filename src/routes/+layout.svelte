<script lang="ts">
  import { browser, dev } from "$app/environment";
  import { page, updated } from "$app/stores";
  import { webVitals } from "$lib/vitals";
  // @ts-ignore
  import { Confetti } from "svelte-confetti";
  import "../app.css";
  import Footer from "../components/navigation/Footer.svelte";
  import Navbar from "../components/navigation/Navbar.svelte";
  import NewVersion from "../components/navigation/NewVersion.svelte";
  import type { LayoutData } from "./$types";

  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  $: if (browser && analyticsId && !dev) {
    webVitals({ path: $page.url.pathname, params: $page.params, analyticsId });
  }

  export let data: LayoutData;
  const PAGE_TITLE = "Andrii Zontov aka. LWJerri";
</script>

<svelte:head>
  <title>{PAGE_TITLE}</title>

  <meta property="og:title" content="{PAGE_TITLE}" />
  <meta name="og:site_name" content="{PAGE_TITLE}" />
</svelte:head>

<div class="flex min-h-screen flex-col justify-between scroll-smooth bg-[#0C0E10] text-white">
  {#if new Date().getMonth() === 3 && new Date().getDate() === 28}
    <div
      style="position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;"
    >
      <Confetti
        x="{[-5, 5]}"
        y="{[0, 0.1]}"
        delay="{[500, 2000]}"
        infinite
        duration="20000"
        amount="150"
        fallDistance="100vh"
      />
    </div>
  {/if}

  <div>
    <div class="{$updated && !dev ? 'block' : 'hidden'}">
      <NewVersion />
    </div>

    <Navbar navbarLinks="{data.navbarLinks}" />
  </div>

  <slot />

  <Footer pageView="{data.pageView}" />
</div>
