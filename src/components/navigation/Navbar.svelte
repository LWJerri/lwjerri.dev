<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import type { Link } from "../../interfaces";

  export let navbarLinks: Link[] = [];

  const defaultURLs: Link[] = [
    { name: "My projects", url: "/projects" },
    { name: "About me ", url: "/about" },
  ];

  $: isMainPage = $page.url.pathname === "/";
  $: isDropdownActive = false;

  let customLinks: Link[] = [];
  let dropdownElement: HTMLDivElement;

  onMount(async () => {
    navbarLinks.map(({ name, url }) => customLinks.push({ name, url }));

    document.addEventListener("click", function (event) {
      if (!dropdownElement?.contains(event?.target as any)) {
        isDropdownActive = false;
      }
    });
  });
</script>

<div class="navbar flex {isMainPage ? 'justify-end' : 'justify-between'} select-none">
  {#if !isMainPage}
    <a class="text-2xl duration-500 hover:translate-x-2 hover:text-[#ED4245]" href="/">> Home</a>
  {/if}

  <div class="inline-flex items-stretch" bind:this="{dropdownElement}">
    <div class="relative">
      <button
        on:click="{() => (isDropdownActive = !isDropdownActive)}"
        class="select-none text-2xl outline-none duration-500 hover:text-[#ED4245]">[Menu]</button
      >

      {#if isDropdownActive}
        <div
          class="absolute right-0 z-10 flex w-48 origin-top-right flex-col space-y-0.5 rounded-md bg-[#1C2125] p-2 pl-3 shadow-2xl"
          role="menu"
        >
          {#each defaultURLs as { name, url }}
            <a
              class="text-lg duration-500 hover:translate-x-2 hover:text-[#ED4245]"
              href="{url}"
              on:click="{() => (isDropdownActive = !isDropdownActive)}">{name}</a
            >
          {/each}

          {#each customLinks as { name, url }}
            <a
              class="text-lg duration-500 hover:translate-x-2 hover:text-[#ED4245]"
              target="_blank"
              rel="noreferrer"
              href="{url}"
              on:click="{() => (isDropdownActive = !isDropdownActive)}">{name}</a
            >
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
