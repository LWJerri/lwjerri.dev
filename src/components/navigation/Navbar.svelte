<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { cn } from "../../helpers/cn";
  import { navbarDropdownLinks } from "../../helpers/constants";

  $: isRootPage = $page.url.pathname === "/";
  $: isDropdownActive = false;

  let dropdownElement: HTMLDivElement;

  onMount(() => {
    document.addEventListener("click", function (event) {
      if (!dropdownElement?.contains(event?.target as any)) {
        isDropdownActive = false;
      }
    });
  });
</script>

<header
  class={cn("flex select-none items-center px-1 py-2 text-lg sm:px-5", isRootPage ? "justify-end" : "justify-between")}>
  {#if !isRootPage}
    <a class="duration-500 hover:text-[#ED4245]" href="/">[🏠]</a>
  {/if}

  <div class="inline-flex items-stretch" bind:this={dropdownElement}>
    <div class="relative">
      <button
        on:click={() => (isDropdownActive = !isDropdownActive)}
        class="select-none outline-none duration-500 hover:text-[#ED4245]">[Menu]</button>

      {#if isDropdownActive}
        <div
          class="absolute right-0 z-10 flex w-48 origin-top-right flex-col space-y-0.5 rounded-md bg-[#1C2125] p-2 pl-3 shadow-2xl">
          {#each navbarDropdownLinks as link}
            <a
              class="duration-500 hover:text-[#ED4245]"
              href={link.url}
              target={link?.external ? "_blank" : ""}
              on:click={() => (isDropdownActive = !isDropdownActive)}>{link.name}</a>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</header>
