<script lang="ts">
  import type { AboutData } from "$lib/data/about";
  import { copyAnchorShareUrl } from "$lib/navigation/scrollToHash";
  import AboutInfo from "./AboutInfo.svelte";

  let { imagesCarousel }: { imagesCarousel: AboutData["imagesCarousel"] } = $props();

  let copied = $state(false);

  async function shareAbout(event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) {
    event.preventDefault();

    await copyAnchorShareUrl("about");

    copied = true;

    setTimeout(() => {
      copied = false;
    }, 2000);
  }
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
        onclick={shareAbout}>{copied ? "[Copied]" : "[Share]"}</a
      >
    </h1>
  </div>

  <AboutInfo {imagesCarousel} />
</div>
