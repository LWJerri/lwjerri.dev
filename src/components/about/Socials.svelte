<script lang="ts">
  import { handleAnchorAbout } from "../../lib/handleAnchorAbout";
  import type { PageData } from "../../routes/about/$types";

  export let data: PageData;
</script>

<h1 class="text-center text-4xl sm:flex sm:items-center sm:space-x-2">
  <span class="text-[#ED4245]">Socials</span>

  <a
    class="select-none outline-none duration-500 hover:text-[#ED4245]"
    href="#contact"
    id="contact"
    on:click="{(event) => handleAnchorAbout(event, 'contact')}">[#]</a
  >
</h1>

<p>
  If you have any questions for me or you just want to talk to me about something, you can use the social networks below
  to contact me.
</p>

<div class="grid select-none grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
  {#each data.socialLinks as { name, icon, url }}
    <a href="{url}" target="_blank" rel="noreferrer" class="mx-auto duration-500 hover:text-[#ED4245]"
      ><div class="flex items-center space-x-2 text-lg">
        {@html icon}<span>{name}</span>
      </div></a
    >
  {/each}
</div>
