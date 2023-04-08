<script lang="ts">
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
  import type { LayoutData } from "./$types";

  inject({ mode: dev ? "development" : "production" });

  export let data: LayoutData;
</script>

<div class="min-h-screen bg-[#0C0E10] scroll-smooth flex flex-col justify-between">
  <Navbar navBarLinks={data.navbarLinks} />

  <slot />

  <Footer currentPageViews={data.currentPageViews} />
</div>
