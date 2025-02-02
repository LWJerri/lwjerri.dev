<script lang="ts">
  import { handleAnchorAbout } from "../../../helpers/handleAnchorAbout";

  export let text: string[];
</script>

<p>
  <a
    class="inline-flex items-baseline font-bold outline-hidden duration-500 select-none hover:text-[#ED4245]"
    href="#intro"
    id="intro"
    data-umami-event="Share 'Intro'"
    on:click={(event) => handleAnchorAbout(event, "intro")}>[#]</a
  >
  {@html text.join(" ")}
</p>
