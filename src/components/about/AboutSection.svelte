<script lang="ts">
  import { handleAnchorAbout } from "../../helpers/handleAnchorAbout";
  import AboutInfo from "./AboutInfo.svelte";
</script>

<div>
  <div class="mb-5 flex flex-row items-center justify-between text-2xl">
    <h1 class="flex items-center space-x-2 text-2xl outline-hidden">
      <span class="text-[#ED4245]">About</span>

      <a
        class="outline-hidden duration-300 select-none hover:text-[#ED4245]"
        href="#about"
        id="about"
        data-umami-event="Share 'About'"
        onclick={(event) => handleAnchorAbout(event, "about")}>[Share]</a
      >
    </h1>
  </div>

  <AboutInfo />
</div>
