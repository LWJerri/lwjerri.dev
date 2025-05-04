<script lang="ts">
  import { handleAnchorAbout } from "../../helpers/handleAnchorAbout";
  import Social from "../ui/Social.svelte";
</script>

<div class="space-y-5">
  <h1 class="flex items-center space-x-2 text-2xl">
    <div class="break-words">
      <span class="text-[#ED4245]">Socials</span>
    </div>

    <a
      class="outline-hidden duration-300 select-none hover:text-[#ED4245]"
      href="#socials"
      id="socials"
      data-umami-event="Share 'Socials'"
      onclick={(event) => handleAnchorAbout(event, "socials")}>[Share]</a
    >
  </h1>

  <p>
    If you have any questions you can contact with me in <Social service="telegram" /> or via
    <Social service="discord" />. Also, I sometimes stream on my <Social service="twitch" />, so feel free to join and
    ask me about some thing in chat.
  </p>
</div>
