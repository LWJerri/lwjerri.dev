<script lang="ts">
  import { dev } from "$app/environment";
  import { beforeNavigate } from "$app/navigation";
  import { updated } from "$app/stores";
  import { inject } from "@vercel/analytics";
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
  import type { LayoutData } from "./$types";

  inject({ mode: dev ? "development" : "production" });

  beforeNavigate(({ willUnload, to }) => {
    if ($updated && !willUnload && to?.url) {
      location.href = to.url.href;
    }
  });

  export let data: LayoutData;
</script>

<div class="min-h-screen bg-[#0C0E10] text-white scroll-smooth flex flex-col justify-between">
  <Navbar externalNavbarLinks={data.externalNavbarLinks} />

  <slot />

  <Footer pageViews={data.pageViews} />
</div>
