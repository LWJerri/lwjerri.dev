<script lang="ts">
  import { onMount } from "svelte";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";

  const oneYearToMs = 1000 * 60 * 60 * 24 * 365;
  const calculateTime = new Date().getTime() - new Date("2005-04-28").getTime();
  const year = Math.floor(calculateTime / oneYearToMs);

  let screenSize = window.innerWidth;
  let emoji = "";

  onMount(async () => {
    const emojiArrayRequest = await fetch(
      "https://gist.githubusercontent.com/LWJerri/6a7bf88b133b4e7b33b709ab89e9f507/raw/5213898326bded6ca20367fd73b3776522c8c3e9/gboard-emojis.json",
    );
    const emojiResponse: Array<string> = await emojiArrayRequest.json();

    const emojiList = emojiResponse.filter((item) => item.length <= 5);

    emoji = screenSize >= 600 ? emojiList[Math.floor(Math.random() * emojiList.length) + 1] : emoji;
  });
</script>

<div class="flex flex-col h-screen justify-between bg-[#0C0E10]" style="font-family: Monocraft;">
  <Navbar />

  <div class="hero flex items-center justify-center h-screen">
    <div class="hero-content text-center">
      <div class="text-white">
        <h1 class="text-5xl font-bold outline-none">
          Hey {emoji} I'm Andrey,<br />
          <span style="color: #5865F2;">a developer</span>
        </h1>

        <p class="mt-5 text-2xl">
          I am a <span style="color: #ED4245;">{year}</span> years old backend developer
        </p>

        <div class="mt-10">
          <a class=" hover:text-[#ED4245] text-white text-2xl duration-500" href="/projects">[Projects]</a>
          <a class="hover:text-[#ED4245] text-white text-2xl duration-500" href="/about">[About]</a>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</div>
