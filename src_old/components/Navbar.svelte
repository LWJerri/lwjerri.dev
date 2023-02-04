<script lang="ts">
  import { onMount } from "svelte";
  import { Link } from "svelte-navigator";

  interface Links {
    name: string;
    url: string;
  }

  const builtIt = [
    { name: "My projects", url: "/projects" },
    { name: "About me", url: "/about" },
  ] as Array<Links>;

  $: customLinks = [] as Array<Links>;

  onMount(async () => {
    const gistRequest = await fetch("https://api.lwjerri.dev/data");
    const { navBarLinks } = await gistRequest.json();

    customLinks = [...customLinks] as Array<Links>;

    navBarLinks.map(({ name, url }) => {
      return customLinks.push({ name, url });
    });
  });

  const isMainPage = window.location.pathname === "/";
</script>

<div class="navbar flex {isMainPage ? 'justify-end' : 'justify-between'}">
  {#if !isMainPage}
    <Link class="hover:text-[#ED4245] duration-500 text-2xl text-white" to="/">> Home</Link>
  {/if}

  <div class="flex-none z-10">
    <div class="dropdown dropdown-end">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="-1" class="hover:text-[#ED4245] text-white text-2xl duration-500 outline-none">[Menu]</label>
      <ul class="dropdown-content menu p-2 bg-[#1C2125] w-48 rounded-none space-y-0.5">
        {#each builtIt as { name, url }}
          <Link class="hover:text-[#ED4245] hover:translate-x-2 duration-500 text-lg text-white" to={url}>{name}</Link>
        {/each}

        {#each customLinks as { name, url }}
          <a
            class="hover:text-[#ED4245] hover:translate-x-2 duration-500 text-lg text-white"
            target="_blank"
            rel="noreferrer"
            href={url}>{name}</a
          >
        {/each}
      </ul>
    </div>
  </div>
</div>
