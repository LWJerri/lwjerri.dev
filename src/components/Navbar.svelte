<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  interface Links {
    name: string;
    url: string;
  }

  export let navBarLinks: Links[] = [];

  const defaultURLs: Links[] = [
    { name: "My projects", url: "/projects" },
    { name: "About me ", url: "/about" },
  ];

  $: isMainPage = $page.url.pathname === "/";
  $: isDropdownActive = false;

  let customLinks: Links[] = [];
  let dropdownElement: HTMLDivElement;

  onMount(async () => {
    navBarLinks.map(({ name, url }) => customLinks.push({ name, url }));

    document.addEventListener("click", function (event) {
      if (!dropdownElement?.contains(event?.target as any)) {
        isDropdownActive = false;
      }
    });
  });
</script>

<div class="navbar text-white flex {isMainPage ? 'justify-end' : 'justify-between'}">
  {#if !isMainPage}
    <a class="hover:text-[#ED4245] hover:translate-x-2 duration-500 text-2xl" href="/">> Home</a>
  {/if}

  <div class="inline-flex items-stretch" bind:this={dropdownElement}>
    <div class="relative">
      <button
        on:click={() => (isDropdownActive = !isDropdownActive)}
        class="hover:text-[#ED4245] text-2xl duration-500 outline-none select-none">[Menu]</button
      >

      {#if isDropdownActive}
        <div
          class="z-10 shadow-2xl flex flex-col right-0 absolute origin-top-right w-48 p-2 pl-3 bg-[#1C2125] space-y-0.5 rounded-md"
          role="menu"
        >
          {#each defaultURLs as { name, url }}
            <a
              class="hover:text-[#ED4245] hover:translate-x-2 duration-500 text-lg"
              href={url}
              on:click={() => (isDropdownActive = !isDropdownActive)}>{name}</a
            >
          {/each}

          {#each customLinks as { name, url }}
            <a
              class="hover:text-[#ED4245] hover:translate-x-2 duration-500 text-lg"
              target="_blank"
              rel="noreferrer"
              href={url}
              on:click={() => (isDropdownActive = !isDropdownActive)}>{name}</a
            >
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
