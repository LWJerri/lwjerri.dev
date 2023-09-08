<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  const PAGE_TITLE = "Andrii Zontov aka. LWJerri";

  let emoji = data.emojis[Math.floor(Math.random() * data.emojis.length)];
</script>

<svelte:head>
  <title>{PAGE_TITLE}</title>

  <meta name="og:title" content="{PAGE_TITLE}" />
  <meta name="og:site_name" content="{PAGE_TITLE}" />
</svelte:head>

<div class="hero flex items-center justify-center" role="main">
  <div class="hero-content text-center">
    <div class="text-center">
      <div class="text-5xl font-bold text-[#5865F2] outline-none">
        <h1>Andrii Zontov <span class="hidden sm:inline">{emoji}</span></h1>
      </div>

      <p class="mt-5 text-2xl">
        I am a <span style="color: #ED4245;">~{data.myAge}</span> years old backend developer
      </p>

      <div class="mt-10">
        <a class="text-2xl duration-500 hover:text-[#ED4245]" href="/projects">[Projects]</a>
        <a class="text-2xl duration-500 hover:text-[#ED4245]" href="/about">[About]</a>
      </div>
    </div>
  </div>
</div>
