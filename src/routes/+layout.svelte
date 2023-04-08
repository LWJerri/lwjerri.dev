<script lang="ts">
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<div class="min-h-screen bg-[#0C0E10] scroll-smooth flex flex-col justify-between">
  <Navbar navBarLinks={data.navbarLinks} />

  <slot />

  <Footer currentPageViews={data.currentPageViews} />
</div>
