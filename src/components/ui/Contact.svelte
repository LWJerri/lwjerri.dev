<script lang="ts">
  import type { AboutData } from "$lib/data/about";
  import { DISCORD_USERNAME } from "../../helpers/constants";

  let {
    contacts,
    service,
  }: {
    contacts: AboutData["contacts"];
    service: keyof AboutData["contacts"];
  } = $props();

  let copied = $state(false);

  async function clickOnDiscord(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
    event.preventDefault();

    await navigator.clipboard.writeText(DISCORD_USERNAME);

    copied = true;

    setTimeout(() => {
      copied = false;
    }, 2000);
  }
</script>

{#if service === "discord"}
  <button type="button" id={service} class="cursor-pointer capitalize hover:text-[#ED4245]" onclick={clickOnDiscord}>
    [{copied ? "Copied" : service}]
  </button>
{:else}
  <a href={contacts[service].url} target="_blank" id={service} class="capitalize hover:text-[#ED4245]">
    [{service}]
  </a>
{/if}
