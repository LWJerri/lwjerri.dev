<script lang="ts">
  import { onMount } from "svelte";
  import { Link } from "svelte-navigator";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
  import emojisList from "../helpers/emojis.json";
  import { webVitals } from "../helpers/vitals";

  const {
    location: { pathname: path },
  } = window;

  const oneYearToMs = 1000 * 60 * 60 * 24 * 365;
  const calculateTime = new Date().getTime() - new Date("2005-04-28").getTime();
  const year = Math.floor(calculateTime / oneYearToMs);

  $: screenSize = window.innerWidth;
  $: emoji = "";

  onMount(async () => {
    webVitals({ path });

    emoji = screenSize >= 600 ? emojisList[Math.floor(Math.random() * emojisList.length)] : emoji;
  });
</script>

<svelte:head>
  <title>Andrey Zontov aka. LWJerri</title>
</svelte:head>

<div class="flex flex-col h-screen justify-between bg-[#0C0E10] scroll-smooth" style="font-family: Monocraft;">
  <Navbar />

  <div class="hero flex items-center justify-center h-screen">
    <div class="hero-content text-center">
      <div class="text-white">
        <h1 class="text-5xl font-bold outline-none">
          Hey {emoji ?? "^-^"} I'm Andrey,<br />
          <span class="text-[#5865F2]">a developer</span>
        </h1>

        <p class="mt-5 text-2xl">
          I am a <span style="color: #ED4245;">{year}</span> years old backend developer
        </p>

        <div class="mt-10">
          <Link class="hover:text-[#ED4245] text-white text-2xl duration-500" to="/projects">[Projects]</Link>
          <Link class="hover:text-[#ED4245] text-white text-2xl duration-500" to="/about">[About]</Link>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</div>
