<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import type { Link } from "../../interfaces";

  const dropdownURLs: Link[] = [
    { name: "My projects", url: "/projects" },
    { name: "About me ", url: "/about" },
    { name: "My GitHub", url: "https://github.com/LWJerri", outside: true },
    { name: "Support me", url: "https://send.monobank.ua/8webyivBtV", outside: true },
  ];

  $: isMainPage = $page.url.pathname === "/";
  $: isDropdownActive = false;

  let dropdownElement: HTMLDivElement;

  onMount(async () => {
    document.addEventListener("click", function (event) {
      if (!dropdownElement?.contains(event?.target as any)) {
        isDropdownActive = false;
      }
    });
  });
</script>

<div class="navbar flex {isMainPage ? 'justify-end' : 'justify-between'} select-none" role="navigation">
  {#if !isMainPage}
    <a class="text-2xl duration-500 hover:text-[#ED4245]" href="/">[/]</a>
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
          {#each dropdownURLs as link}
            <a
              class="text-lg duration-500 hover:text-[#ED4245]"
              href="{link.url}"
              target="{link.outside ? '_blank' : ''}"
              on:click="{() => (isDropdownActive = !isDropdownActive)}">{link.name}</a
            >
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
