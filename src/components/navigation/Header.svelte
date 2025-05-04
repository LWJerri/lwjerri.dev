<script lang="ts">
  import { page } from "$app/state";
  import { onMount } from "svelte";
  import { cn } from "../../helpers/cn";
  import { HEADER_LINKS } from "../../helpers/constants";

  let isDropdownVisible = $state(false);
  let dropdownElement: HTMLElement;

  const isMainPage = $derived(page.url.pathname === "/");

  function toggleDropdown() {
    isDropdownVisible = !isDropdownVisible;
  }

  onMount(() => {
    document.addEventListener("click", (event) => {
      if (dropdownElement && event.target instanceof Node && !dropdownElement.contains(event.target)) {
        isDropdownVisible = false;
      }
    });
  });
</script>

<header
  class={cn(
    "mb-5 flex items-center px-1 py-2 text-lg select-none sm:px-5",
    isMainPage ? "justify-end" : "justify-between",
  )}
>
  <a class={cn("transition-colors duration-300 hover:text-[#ED4245]", isMainPage ? "hidden" : "")} href="/">[Home]</a>

  <nav class="relative" bind:this={dropdownElement}>
    <button class="transition-colors duration-300 hover:cursor-pointer hover:text-[#ED4245]" onclick={toggleDropdown}
      >[Menu]</button
    >

    <div
      class={cn(
        "absolute right-0 z-10 mt-2 flex w-48 origin-top-right transform flex-col space-y-1 rounded-md bg-[#2A2929] p-2 pl-3 shadow-2xl transition-all duration-300 ease-in-out",
        isDropdownVisible ? "scale-100 opacity-100" : "pointer-events-none hidden scale-95 opacity-0",
      )}
    >
      {#each HEADER_LINKS as link (link.url)}
        {@const isExternal = link.url.startsWith("http")}

        <a
          class="transition-colors duration-300 hover:text-[#ED4245]"
          href={link.url}
          target={isExternal ? "_blank" : undefined}
          onclick={toggleDropdown}>{link.title}</a
        >
      {/each}
    </div>
  </nav>
</header>
