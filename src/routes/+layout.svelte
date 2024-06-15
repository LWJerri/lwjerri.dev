<script lang="ts">
  import { browser, dev } from "$app/environment";
  import { updated } from "$app/stores";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
  import "../app.css";
  import Confetti from "../components/Confetti.svelte";
  import Update from "../components/Update.svelte";
  import Footer from "../components/navigation/Footer.svelte";
  import Header from "../components/navigation/Header.svelte";
  import type { LayoutData } from "./$types";

  $: if (browser && !dev) {
    injectSpeedInsights();
  }

  export let data: LayoutData;

  const date = new Date();
</script>

<div class="flex min-h-screen flex-col justify-between bg-gradient-to-br from-[#121212] to-[#0C0E10] text-white">
  {#if date.getMonth() === 3 && date.getDate() === 28}
    <Confetti />
  {/if}

  <Header />

  <slot />

  <div>
    <div class="px-1 sm:px-5 {$updated && !dev ? 'block' : 'hidden'}">
      <Update />
    </div>

    <Footer views={data.views} />
  </div>
</div>
