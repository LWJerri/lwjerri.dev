<script lang="ts">
  import { handleAnchorAbout } from "../../helpers/handleAnchorAbout";
  import { load as aboutLoad } from "../../routes/about/+page";

  const { stack } = aboutLoad();
</script>

<div class="space-y-5">
  <h1 class="flex items-center space-x-2 text-2xl">
    <div class="break-words">
      <span class="text-[#ED4245]">My stack</span>
    </div>

    <a
      class="outline-hidden duration-300 select-none hover:text-[#ED4245]"
      href="#my-stack"
      id="my-stack"
      data-umami-event="Share 'My stack'"
      onclick={(event) => handleAnchorAbout(event, "my-stack")}>[Share]</a
    >
  </h1>

  <p>
    When developing projects I use different technologies and programming languages, so that the product came out as
    best as possible and satisfied my desires.
  </p>

  <div class="space-y-2">
    <h2 class="text-lg text-[#ED4245]">Languages</h2>

    <p class="text-[#5862F2]">{stack.languages.join(", ")}</p>
  </div>

  <div class="space-y-2">
    <h2 class="text-lg text-[#ED4245]">Technologies</h2>

    {#each Object.keys(stack.technologies) as technology}
      <div>
        {technology}: <span class="text-[#5862F2]">{stack.technologies[technology].join(", ")}</span>
      </div>
    {/each}
  </div>
</div>
