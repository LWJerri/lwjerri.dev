<script lang="ts">
  import { browser, dev } from "$app/environment";
  import { updated } from "$app/stores";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
  import "../app.css";
  import Confetti from "../components/Confetti.svelte";
  import Update from "../components/Update.svelte";
  import Footer from "../components/navigation/Footer.svelte";
  import Navbar from "../components/navigation/Navbar.svelte";
  import { cn } from "../helpers/cn";
  import type { LayoutData } from "./$types";

  $: if (browser && !dev) {
    injectSpeedInsights();
  }

  export let data: LayoutData;

  const date = new Date();
</script>

<div class="flex min-h-screen flex-col justify-between bg-[#0C0E10] text-white">
  {#if date.getMonth() === 3 && date.getDate() === 28}
    <Confetti />
  {/if}

  <Navbar />

  <slot />

  <div>
    <div class={cn("mx-auto max-w-5xl px-1 sm:px-5", $updated && !dev ? "block" : "hidden")}>
      <Update />
    </div>

    <Footer views={data.views} />
  </div>
</div>
