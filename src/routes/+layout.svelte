<script lang="ts">
  import { browser, dev } from "$app/environment";
  import { updated } from "$app/stores";
  import { injectSpeedInsights } from "@vercel/speed-insights";
  import "../app.css";
  import Confetti from "../components/Confetti.svelte";
  import Update from "../components/Update.svelte";
  import Footer from "../components/navigation/Footer.svelte";
  import Header from "../components/navigation/Header.svelte";
  import type { LayoutData } from "./$types";

  $: if (browser && !dev) {
    injectSpeedInsights({ framework: "sveltekit" });
  }

  export let data: LayoutData;

  const date = new Date();
</script>

<div class="relative flex min-h-dvh flex-col justify-between bg-linear-to-br from-[#121212] to-[#0C0E10] text-white">
  {#if date.getMonth() === 3 && date.getDate() === 28}
    <Confetti />
  {/if}

  <Header />

  <slot />

  <div class="fixed right-0 bottom-10 left-0 z-10 {$updated && !dev ? 'block' : 'hidden'}">
    <Update />
  </div>

  <Footer views={data.views} />
</div>
