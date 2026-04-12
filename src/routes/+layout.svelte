<script lang="ts">
  import { browser, dev } from "$app/environment";
  import { updated } from "$app/state";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
  import "../app.css";
  import Footer from "../components/navigation/Footer.svelte";
  import Header from "../components/navigation/Header.svelte";
  import Confetti from "../components/ui/Confetti.svelte";
  import Update from "../components/ui/Update.svelte";
  import type { LayoutData } from "./$types";

  $: if (browser && !dev) {
    injectSpeedInsights();
  }

  export let data: LayoutData;

  const date = new Date();
</script>

<svelte:head>
  {#if data.enableAnalytics}
    <script
      async
      defer
      src="https://umami.lwjerri.dev/script.js"
      data-website-id="e107c898-1d93-45b4-b9e8-f8e488489b6b"
    ></script>

    <script async defer src="https://rybbit.lwjerri.dev/api/script.js" data-site-id="1"></script>
  {/if}
</svelte:head>

<div class="relative flex min-h-dvh flex-col justify-between bg-linear-to-br from-[#121212] to-[#0C0E10] text-white">
  {#if date.getMonth() === 3 && date.getDate() === 28}
    <Confetti />
  {/if}

  <Header />

  <slot />

  {#if updated.current && !dev}
    <div class="fixed right-0 bottom-10 left-0 z-10 block text-center">
      <Update />
    </div>
  {/if}

  <Footer views={data.views} />
</div>
