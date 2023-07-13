<script lang="ts">
  import { browser } from "$app/environment";
  import { beforeNavigate } from "$app/navigation";
  import { page, updated } from "$app/stores";
  import { webVitals } from "$lib/vitals";
  import { inject } from "@vercel/analytics";
  // @ts-ignore
  import { Confetti } from "svelte-confetti";
  import "../app.css";
  import Footer from "../components/navigation/Footer.svelte";
  import Navbar from "../components/navigation/Navbar.svelte";
  import type { LayoutData } from "./$types";

  inject({ mode: "auto" });

  $: if ($updated) {
    window.location.reload();
  }

  beforeNavigate(({ willUnload, to }) => {
    if ($updated && !willUnload && to?.url) {
      location.href = to.url.href;
    }
  });

  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  $: if (browser && analyticsId) {
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

  <Navbar navbarLinks="{data.navbarLinks}" />

  <slot />

  <Footer pageViews="{data.pageViews}" />
</div>
