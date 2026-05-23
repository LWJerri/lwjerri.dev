<script lang="ts">
  import type { AboutData } from "$lib/data/about";
  import { copyAnchorShareUrl } from "$lib/navigation/scrollToHash";
  import Social from "../ui/Social.svelte";

  let { socials }: { socials: AboutData["socials"] } = $props();

  let copied = $state(false);

  async function shareSocials(event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) {
    event.preventDefault();

    await copyAnchorShareUrl("socials");

    copied = true;

    setTimeout(() => {
      copied = false;
    }, 2000);
  }
</script>

<div class="space-y-5">
  <h1 class="flex items-center space-x-2 text-2xl">
    <div class="wrap-break-word">
      <span class="text-[#ED4245]">Socials</span>
    </div>

    <a
      class="outline-hidden duration-300 select-none hover:text-[#ED4245]"
      href="#socials"
      id="socials"
      data-umami-event="Share 'Socials'"
      onclick={shareSocials}>{copied ? "[Copied]" : "[Share]"}</a
    >
  </h1>

  <p>
    If you have any questions you can contact with me in <Social {socials} service="telegram" /> or via
    <Social {socials} service="discord" />. Also, I sometimes stream on my <Social {socials} service="twitch" />, so
    feel free to join and ask me about some thing in chat.
  </p>
</div>
