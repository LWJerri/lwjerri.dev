<script lang="ts">
  import type { PageData } from "../$types";
  import { handleAnchorAbout } from "../../../helpers/handleAnchorAbout";

  export let data: PageData;
  export let usedTechnologies: Array<{ title: string; list: string[] }>;
</script>

<h1 class="text-center text-4xl sm:flex sm:items-center sm:space-x-2">
  <div class="break-words">
    <span class="text-[#ED4245]">What I use</span>
  </div>

  <a
    class="select-none outline-none duration-500 hover:text-[#ED4245]"
    href="#what-I-use"
    id="what-I-use"
    on:click="{(event) => handleAnchorAbout(event, 'stack')}">[#]</a
  >
</h1>

<p>
  When developing projects I use different technologies and programming languages, so that the product came out as best
  as possible and satisfied my desires.
</p>

<div class="space-y-2">
  <h2 class="text-xl text-[#ED4245]">Languages</h2>

  <p class="text-[#22B8CF]">
    {@html data.languages.join(", ").replaceAll("*", "<span class='text-white'>*</span>")}
  </p>
</div>

<div class="space-y-2">
  <h2 class="text-xl text-[#ED4245]">Technologies</h2>

  {#each usedTechnologies as techology}
    <div>
      {techology.title}: {@html `<span class="text-[#22B8CF]">${techology.list
        .join(", ")
        .replaceAll("*", "<span class='text-white'>*</span>")}</span>`}
    </div>
  {/each}
</div>

<p class="text-right">* - have a basic knowledge.</p>
