<script lang="ts">
  import { browser, dev } from "$app/environment";
  import { updated } from "$app/state";
  import { injectSpeedInsights } from "@vercel/speed-insights";
  import { onMount } from "svelte";
  import "../app.css";
  import Footer from "../components/navigation/Footer.svelte";
  import Header from "../components/navigation/Header.svelte";
  import Confetti from "../components/ui/Confetti.svelte";
  import Update from "../components/ui/Update.svelte";
  import type { LayoutData } from "./$types";

  onMount(() => {
    let umamiScript: HTMLScriptElement;
    let rybbitScript: HTMLScriptElement;

    if (window.location.hostname.toLocaleLowerCase().startsWith("lwjerri")) {
      umamiScript = document.createElement("script");
      rybbitScript = document.createElement("script");

      umamiScript.async = true;
      umamiScript.defer = true;
      umamiScript.src = "https://umami.lwjerri.dev/script.js";
      umamiScript.setAttribute("data-website-id", "e107c898-1d93-45b4-b9e8-f8e488489b6b");

      rybbitScript.async = true;
      rybbitScript.defer = true;
      rybbitScript.src = "https://rybbit.lwjerri.dev/api/script.js";
      rybbitScript.setAttribute("data-site-id", "1");

      document.head.appendChild(umamiScript);
      document.head.appendChild(rybbitScript);
    }

    return () => {
      umamiScript.remove();
      rybbitScript.remove();
    };
  });

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

  {#if updated.current && !dev}
    <div class="fixed right-0 bottom-10 left-0 z-10 block text-center">
      <Update />
    </div>
  {/if}

  <Footer views={data.views} />
</div>
