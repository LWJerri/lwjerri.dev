<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  let emoji = data.emojis[Math.floor(Math.random() * data.emojis.length)];
</script>

<svelte:head>
  <title>Andrey Zontov aka. LWJerri</title>
</svelte:head>

<div class="hero flex items-center justify-center">
  <div class="hero-content text-center">
    <div class="text-center">
      <h1 class="text-5xl text-[#5865F2] font-bold outline-none">
        <p>Andrey Zontov <span class="hidden sm:inline">{emoji}</span></p>
      </h1>

      <p class="mt-5 text-2xl">
        I am a <span style="color: #ED4245;">~{data.myAge}</span> years old backend developer
      </p>

      <div class="mt-10">
        <a class="hover:text-[#ED4245] text-2xl duration-500" href="/projects">[Projects]</a>
        <a class="hover:text-[#ED4245] text-2xl duration-500" href="/about">[About]</a>
      </div>
    </div>
  </div>
</div>
