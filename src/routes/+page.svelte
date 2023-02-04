<script lang="ts">
  export let data: { year: number; emojisList: Array<string> };

  let innerWidth = 0;
  let screenSize = innerWidth;
  let emoji = "";

  emoji = screenSize >= 600 ? data.emojisList[Math.floor(Math.random() * data.emojisList.length)] : emoji;
</script>

<svelte:window bind:innerWidth />

<svelte:head>
  <title>Andrey Zontov</title>
</svelte:head>

<div class="flex flex-col h-screen justify-between bg-[#0C0E10] scroll-smooth" style="font-family: Monocraft;">
  <!-- <Navbar /> -->

  <div class="hero flex items-center justify-center h-screen">
    <div class="hero-content text-center">
      <div class="text-white">
        <h1 class="text-5xl font-bold outline-none">
          Hey {emoji ?? "^-^"} I'm Andrey,<br />
          <span style="color: #5865F2;">a developer</span>
        </h1>

        <p class="mt-5 text-2xl">
          I am a <span style="color: #ED4245;">{data.year}</span> years old backend developer
        </p>

        <div class="mt-10">
          <a class="hover:text-[#ED4245] text-white text-2xl duration-500" href="/projects">[Projects]</a>
          <a class="hover:text-[#ED4245] text-white text-2xl duration-500" href="/about">[About]</a>
        </div>
      </div>
    </div>
  </div>

  <!-- <Footer /> -->
</div>
