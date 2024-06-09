<script lang="ts">
  import { browser, dev } from "$app/environment";
  import { updated } from "$app/stores";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
  import SvelteSeo from "svelte-seo";
  import "../app.css";
  import Confetti from "../components/Confetti.svelte";
  import Update from "../components/Update.svelte";
  import Footer from "../components/navigation/Footer.svelte";
  import Navbar from "../components/navigation/Navbar.svelte";
  import type { LayoutData } from "./$types";

  $: if (browser && !dev) {
    injectSpeedInsights();
  }

  export let data: LayoutData;
  const PAGE_TITLE = "Andrii Zontov aka. LWJerri";

  const date = new Date();
</script>

<SvelteSeo title={PAGE_TITLE} openGraph={{ title: PAGE_TITLE, site_name: PAGE_TITLE }} />

<div class="flex min-h-screen flex-col justify-between scroll-smooth bg-[#0C0E10] text-white">
  {#if date.getMonth() === 3 && date.getDate() === 28}
    <Confetti />
  {/if}

  <Navbar />

  <slot />

  <div>
    <div class="flex justify-center {$updated && !dev ? 'block' : 'hidden'}">
      <Update />
    </div>

    <Footer views={data.views} />
  </div>
</div>
