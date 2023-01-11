<script lang="ts">
  const links = [
    { name: "My projects", url: "/projects" },
    { name: "About me", url: "/about" },
    { name: "Support me", url: "https://send.monobank.ua/8webyivBtV", isNewTab: true },
  ] as Array<{ name: string; url: string; isNewTab?: boolean }>;

  const isMainLink = window.location.pathname === "/";
</script>

<div class="navbar flex {isMainLink ? 'justify-end' : 'justify-between'}">
  {#if !isMainLink}
    <a class="hover:text-[#ED4245] duration-500 text-2xl text-white" href="/">[Home]</a>
  {/if}

  <div class="flex-none">
    <div class="dropdown dropdown-hover dropdown-end drop-shadow-2xl">
      <label tabindex="0" class="hover:text-[#ED4245] text-white text-2xl duration-500">[Menu]</label>

      <ul tabindex="-1" class="dropdown-content menu p-2 bg-[#1C2125] w-48 rounded-none space-y-0.5">
        {#each links as { name, url, isNewTab }}
          <a
            class="hover:text-[#ED4245] hover:translate-x-2 duration-500 text-lg text-white"
            target={isNewTab ? "_blank" : "_self"}
            href={url}>{name}</a
          >
        {/each}
      </ul>
    </div>
  </div>
</div>
