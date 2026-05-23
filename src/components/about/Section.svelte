<script lang="ts">
  import { copyAnchorShareUrl } from "$lib/navigation/scrollToHash";
  import type { Snippet } from "svelte";

  let {
    title,
    titleSnippet,
    bodySnippet,
  }: {
    title: string;
    titleSnippet: Snippet;
    bodySnippet: Snippet;
  } = $props();

  const titleId = $derived(title.toLowerCase().replaceAll(" ", "-"));

  let copied = $state(false);

  async function handleShare(event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) {
    event.preventDefault();

    await copyAnchorShareUrl(titleId);

    copied = true;

    setTimeout(() => {
      copied = false;
    }, 2000);
  }
</script>

<div>
  {@render titleSnippet()}

  <div>
    <a
      class="float-left mr-2 items-baseline font-bold outline-hidden duration-300 select-none hover:text-[#ED4245]"
      href="#{titleId}"
      id={titleId}
      data-umami-event="Share '{title}'"
      onclick={handleShare}>{copied ? "[Copied]" : "[Share]"}</a
    >
    {@render bodySnippet()}
  </div>
</div>
