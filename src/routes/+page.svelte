<script lang="ts">
  import SvelteSeo from "svelte-seo";
  import { OWNER } from "../helpers/constants";
  import type { PageData } from "./$types";

  export let data: PageData;

  const PAGE_TITLE = "Andrii Zontov aka. LWJerri";
  const PAGE_DESCRIPTION = "Welcome! Here you'll find information about me, my projects, and my achievements.";
</script>

<SvelteSeo
  title={PAGE_TITLE}
  description={PAGE_DESCRIPTION}
  openGraph={{ title: PAGE_TITLE, description: PAGE_DESCRIPTION }} />

<div class="hero flex justify-center">
  <div class="hero-content text-center">
    <div class="px-1 text-center sm:px-5">
      <div class="font-bold text-[#5865F2] outline-none">
        <h1 class="text-5xl">{OWNER}</h1>
      </div>

      <p class="mt-5 text-2xl">
        I am a <span style="color: #ED4245;">{data.age}</span> old backend developer
      </p>

      <div class="mt-5 text-2xl">
        <a class="duration-500 hover:text-[#ED4245]" href="/projects">[Projects]</a>
        <a class="duration-500 hover:text-[#ED4245]" href="/about">[About]</a>
      </div>
    </div>
  </div>
</div>
