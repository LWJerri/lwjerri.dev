<script lang="ts">
  import { handleAnchorAbout } from "../../../helpers/handleAnchorAbout";

  export let text: string[];
</script>

<p>
  <a
    class="inline-flex select-none items-baseline font-bold outline-none duration-500 hover:text-[#ED4245]"
    href="#intro"
    id="intro"
    on:click={(event) => handleAnchorAbout(event, "intro")}>[#]</a
  >
  {@html text.join(" ")}
</p>
