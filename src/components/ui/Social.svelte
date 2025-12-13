<script lang="ts">
  import { DISCORD_USERNAME } from "../../helpers/constants";
  import { load as aboutLoad } from "../../routes/about/+page";

  const { socials } = aboutLoad();

  export let service: keyof typeof socials;

  async function clickOnDiscord(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
    event.preventDefault();

    const socialElement = document.getElementById(service);

    if (!socialElement) return;

    await navigator.clipboard.writeText(DISCORD_USERNAME);

    socialElement.innerHTML = "[Copied]";

    setTimeout(() => {
      socialElement.innerHTML = "[Discord]";
    }, 2000);
  }
</script>

{#if service === "discord"}
  <button type="button" id={service} class="cursor-pointer capitalize hover:text-[#ED4245]" on:click={clickOnDiscord}>
    [{service}]
  </button>
{:else}
  <a href={socials[service].url} target="_blank" id={service} class="capitalize hover:text-[#ED4245]">
    [{service}]
  </a>
{/if}
