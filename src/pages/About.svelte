<script lang="ts">
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";

  const languages = [] as Array<string>;
  const links = [] as Array<{ name: string; icon: string; url: string }>;
</script>

<div class="flex flex-col justify-between bg-[#0C0E10]" style="font-family: Monocraft;">
  <Navbar />

  <div class="flex flex-col space-y-16 max-w-4xl px-5 mx-auto">
    <div class="space-y-5">
      <h1 class="text-[#ED4245] text-5xl font-bold outline-none">About</h1>
      <img src="https://i.imgur.com/E6GUFW0.png" class="mx-auto" width="720" alt="X" />
      <p class="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar, felis at pulvinar rhoncus, sem enim
        dignissim justo, non interdum sapien dolor at ante. Aenean nisi ligula, consectetur a dignissim sit amet, porta
        eget dui. Fusce quis vehicula turpis. Sed vel tellus velit. Fusce non nisl aliquet, posuere elit eu, faucibus
        nibh.
      </p>
    </div>

    <div class="space-y-5">
      <h1 class="text-[#ED4245] text-4xl">Technologies</h1>
      <p class="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar, felis at pulvinar rhoncus, sem enim
        dignissim justo, non interdum sapien dolor at ante. Aenean nisi ligula, consectetur a dignissim sit amet, porta
        eget dui.
      </p>

      <p class="text-[#22B8CF]">{languages.join(", ")}</p>
    </div>

    <div class="space-y-5">
      <h1 class="text-[#ED4245] text-4xl">Socials</h1>
      <p class="text-white">Leave a message on the form below or get in touch through Discord, Twitter or email.</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4">
        {#each links as { name, icon, url }}
          <a href={url} class="hover:text-[#ED4245] duration-500"
            ><div class="flex items-center justify-center text-lg space-x-2">
              {@html icon}<span>{name}</span>
            </div></a
          >
        {/each}
      </div>
    </div>
  </div>

  <Footer />
</div>
