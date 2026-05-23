<script lang="ts">
  import Page from "../components/layout/Page.svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<Page centered>
  <div class="text-center">
    <div class="font-bold text-[#60A5FA] outline-hidden">
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
</Page>
