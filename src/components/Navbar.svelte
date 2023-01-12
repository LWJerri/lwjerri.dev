<script lang="ts">
  import { onMount } from "svelte";

  interface Links {
    name: string;
    url: string;
  }

  let links = [
    { name: "My projects", url: "/projects" },
    { name: "About me", url: "/about" },
  ] as Array<Links>;

  onMount(async () => {
    const gistRequest = await fetch("https://api.lwjerri.dev/data");
    const { navBarLinks } = await gistRequest.json();

    links = [...links] as Array<Links>;

    navBarLinks.map(({ name, url }) => {
      return links.push({ name, url });
    });
  });

  const isMainPage = window.location.pathname === "/";
</script>

<div class="navbar flex {isMainPage ? 'justify-end' : 'justify-between'}">
  {#if !isMainPage}
    <a class="hover:text-[#ED4245] duration-500 text-2xl text-white" href="/">> Home</a>
  {/if}

  <div class="flex-none z-10">
    <div class="dropdown dropdown-hover dropdown-end drop-shadow-2xl">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="hover:text-[#ED4245] text-white text-2xl duration-500">[Menu]</label>

      <ul class="dropdown-content menu p-2 bg-[#1C2125] w-48 rounded-none space-y-0.5">
        {#each links as { name, url }}
          <a
            class="hover:text-[#ED4245] hover:translate-x-2 duration-500 text-lg text-white"
            target={url.startsWith("/") ? "_self" : "_blank"}
            href={url}>{name}</a
          >
        {/each}
      </ul>
    </div>
  </div>
</div>
