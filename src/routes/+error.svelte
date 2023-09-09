<script lang="ts">
  import { onMount } from "svelte";

  let url: string;

  onMount(() => {
    url = `/error/${Math.floor(Math.random() * 18 + 1)}.webp`;
  });

  const PAGE_TITLE = "Andrii Zontov - Backstage?...";
</script>

<svelte:head>
  <title>{PAGE_TITLE}</title>

  <meta name="og:title" content={PAGE_TITLE} />
  <meta name="og:site_name" content={PAGE_TITLE} />
</svelte:head>

<div class="grid place-content-center px-4">
  <div class="text-center">
    <div class="flex justify-center">
      <h1 class="text-9xl font-black text-[#ED4245]">404</h1>

      <img class="hidden sm:block" src={url} alt="" />
    </div>

    <p class="mt-4 text-xl">Requested page not found</p>
  </div>
</div>
