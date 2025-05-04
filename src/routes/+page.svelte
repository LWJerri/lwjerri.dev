<script lang="ts">
  import { Seo } from "@svelte-bin/seo";

  import type { PageData } from "./$types";

  export let data: PageData;

  const PAGE_TITLE = "Andrii Zontov aka. LWJerri";
  const PAGE_DESCRIPTION = "Welcome! Here you'll find information about me, my projects, and my achievements.";
</script>

<Seo
  title={PAGE_TITLE}
  description={PAGE_DESCRIPTION}
  openGraph={{ title: PAGE_TITLE, description: PAGE_DESCRIPTION }}
/>

<div class="hero flex justify-center">
  <div class="hero-content px-1 text-center sm:px-5">
    <div class="font-bold text-[#5862F2] outline-hidden">
      <h1 class="cursor-default text-5xl">Andrii Zontov</h1>
    </div>

    <p class="mt-5 cursor-default text-2xl">
      I am a <span class="text-[#ED4245]">{data.age}</span> old backend engineer
    </p>

    <div class="mt-5 text-2xl">
      <a class="duration-300 hover:text-[#ED4245]" href="/projects">[Projects]</a>
      <a class="duration-300 hover:text-[#ED4245]" href="/about">[About]</a>
    </div>
  </div>
</div>
