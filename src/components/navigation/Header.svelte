<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { headerDropdownLinks } from "../../helpers/constants";

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
  class="mb-5 flex items-center px-1 py-2 text-lg select-none sm:px-5 {isRootPage ? 'justify-end' : 'justify-between'}"
>
  {#if !isRootPage}
    <a class="duration-500 hover:text-[#ED4245]" href="/">[Home]</a>
  {/if}

  <div class="inline-flex items-stretch" bind:this={dropdownElement}>
    <div class="relative">
      <button
        on:click={() => (isDropdownActive = !isDropdownActive)}
        class="outline-hidden duration-500 select-none hover:text-[#ED4245]">[Menu]</button
      >

      {#if isDropdownActive}
        <div
          class="absolute right-0 z-10 flex w-48 origin-top-right flex-col space-y-0.5 rounded-md bg-[#1D2123] p-2 pl-3 shadow-2xl"
        >
          {#each headerDropdownLinks as link}
            <a
              class="duration-500 hover:text-[#ED4245]"
              href={link.url}
              target={link?.external ? "_blank" : ""}
              on:click={() => (isDropdownActive = !isDropdownActive)}>{link.name}</a
            >
          {/each}
        </div>
      {/if}
    </div>
  </div>
</header>
