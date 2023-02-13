<script lang="ts">
  import { onMount } from "svelte";
  import { Link } from "svelte-navigator";

  interface Links {
    name: string;
    url: string;
  }

  const builtIn = [
    { name: "My projects", url: "/projects" },
    { name: "About me", url: "/about" },
  ] as Array<Links>;

  $: customLinks = [] as Array<Links>;
  $: isActive = false;
  let dropdownElement;

  onMount(async () => {
    try {
      const gistRequest = await fetch("https://api.lwjerri.dev/data");
      const { navBarLinks } = await gistRequest.json();

      customLinks = [...customLinks] as Array<Links>;

      navBarLinks.map(({ name, url }) => {
        return customLinks.push({ name, url });
      });
    } catch {}
  });

  const isMainPage = window.location.pathname === "/";

  document.addEventListener("click", function (event) {
    if (!dropdownElement.contains(event.target)) {
      isActive = false;
    }
  });
</script>

<div class="navbar text-white flex {isMainPage ? 'justify-end' : 'justify-between'}">
  {#if !isMainPage}
    <Link class="hover:text-[#ED4245] hover:translate-x-2 duration-500 text-2xl" to="/">> Home</Link>
  {/if}

  <div class="inline-flex items-stretch" bind:this={dropdownElement}>
    <div class="relative">
      <button
        on:click={() => (isActive = !isActive)}
        class="hover:text-[#ED4245] text-2xl duration-500 outline-none select-none">[Menu]</button
      >

      {#if isActive}
        <div
          class="z-10 shadow-2xl flex flex-col right-0 absolute origin-top-right w-48 p-2 pl-3 bg-[#1C2125] space-y-0.5 rounded-md"
          role="menu"
        >
          {#each builtIn as { name, url }}
            <Link class="hover:text-[#ED4245] hover:translate-x-2 duration-500 text-lg" to={url}>{name}</Link>
          {/each}

          {#each customLinks as { name, url }}
            <a
              class="hover:text-[#ED4245] hover:translate-x-2 duration-500 text-lg"
              target="_blank"
              rel="noreferrer"
              href={url}>{name}</a
            >
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
