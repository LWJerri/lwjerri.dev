<script lang="ts">
  import { browser } from "$app/environment";
  import { beforeNavigate } from "$app/navigation";
  import { page, updated } from "$app/stores";
  import { webVitals } from "$lib/vitals";
// import { inject } from "@vercel/analytics";
// @ts-ignore
  import { Confetti } from "svelte-confetti";
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";

  // inject({ mode: "auto" });

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

  // export let data: LayoutData;
</script>

<div class="min-h-screen bg-[#0C0E10] text-white scroll-smooth flex flex-col justify-between">
  {#if new Date().getMonth() === 3 && new Date().getDate() === 28}
    <div
      style="position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden; pointer-events: none;"
    >
      <Confetti
        x={[-5, 5]}
        y={[0, 0.1]}
        delay={[500, 2000]}
        infinite
        duration="20000"
        amount="150"
        fallDistance="100vh"
      />
    </div>
  {/if}

  <Navbar externalNavbarLinks={[]} />

  <slot />

  <Footer pageViews={0} />
</div>
