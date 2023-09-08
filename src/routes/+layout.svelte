<script lang="ts">
  import { browser, dev } from "$app/environment";
  import { page, updated } from "$app/stores";
  import { webVitals } from "$lib/vitals";
  import "../app.css";
  import Confetti from "../components/Confetti.svelte";
  import Update from "../components/Update.svelte";
  import Footer from "../components/navigation/Footer.svelte";
  import Navbar from "../components/navigation/Navbar.svelte";
  import type { LayoutData } from "./$types";

  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  $: if (browser && analyticsId && !dev) {
    webVitals({ path: $page.url.pathname, params: $page.params, analyticsId });
  }

  export let data: LayoutData;
  const PAGE_TITLE = "Andrii Zontov aka. LWJerri";

  const currrentDate = new Date();
</script>

<svelte:head>
  <title>{PAGE_TITLE}</title>

  <meta name="og:title" content={PAGE_TITLE} />
  <meta name="og:site_name" content={PAGE_TITLE} />
</svelte:head>

<div class="flex min-h-screen flex-col justify-between scroll-smooth bg-[#0C0E10] text-white">
  {#if currrentDate.getMonth() === 3 && currrentDate.getDate() === 28}
    <Confetti />
  {/if}

  <Navbar />

  <slot />

  <div>
    <div class="flex justify-center {$updated && !dev ? 'block' : 'hidden'}">
      <Update />
    </div>

    <Footer pageView={data.pageView} />
  </div>
</div>
