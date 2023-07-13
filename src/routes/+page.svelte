<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  let emoji = data.emojis[Math.floor(Math.random() * data.emojis.length)];
</script>

<div class="hero flex items-center justify-center">
  <div class="hero-content text-center">
    <div class="text-center">
      <h1 class="text-5xl font-bold text-[#5865F2] outline-none">
        <p>Andrii Zontov <span class="hidden sm:inline">{emoji}</span></p>
      </h1>

      <p class="mt-5 text-2xl">
        I am a <span style="color: #ED4245;">~{data.myAge}</span> years old backend developer
      </p>

      <div class="mt-10">
        <a
          class="text-2xl duration-500 hover:text-[#ED4245]"
          href="/projects"
          data-umami-event="Click Projects on main page">[Projects]</a
        >
        <a class="text-2xl duration-500 hover:text-[#ED4245]" href="/about" data-umami-event="Click ABout on main page"
          >[About]</a
        >
      </div>
    </div>
  </div>
</div>
