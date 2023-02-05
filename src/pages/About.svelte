<script lang="ts">
  import { onMount } from "svelte";
  import MyImage from "../../public/assets/me.png";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
  import { webVitals } from "../helpers/vitals";

  const {
    location: { pathname: path },
  } = window;

  interface SocialLinks {
    name: string;
    icon: string;
    url: string;
  }

  $: languages = [] as Array<string>;
  $: technologies = [] as Array<string>;
  $: links = [] as Array<SocialLinks>;

  onMount(async () => {
    webVitals({ path });

    await dataLoader();

    const anchor = window.location.hash.slice(1);

    if (anchor) {
      const findElement = document.getElementById(anchor);

      findElement.getElementsByTagName("input")[0].checked = true;

      if (findElement) {
        window.scrollTo({
          top: findElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  });

  async function dataLoader() {
    const gistRequest = await fetch("https://api.lwjerri.dev/data");
    const response = await gistRequest.json();

    links = response.socialLinks;
    technologies = response.techologies;
    languages = response.languages;
  }

  function handleAnchorClick(event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }, id: string) {
    event.preventDefault();

    const link = event.currentTarget;
    const anchor = new URL(link.href).hash;

    const findElement = document.getElementById(id);

    const {
      location: { origin, pathname },
    } = window;

    navigator.clipboard.writeText(`${origin}${pathname}${anchor}`);

    findElement.innerHTML = "[Copied]";

    setTimeout(() => {
      findElement.innerHTML = "[#]";
    }, 500);
  }
</script>

<svelte:head>
  <title>Andrey Zontov - [About]</title>
</svelte:head>

<div class="flex flex-col justify-between bg-[#0C0E10] scroll-smooth" style="font-family: Monocraft;">
  <Navbar />

  <div class="flex flex-col space-y-16 max-w-4xl px-5 mx-auto">
    <div class="space-y-5">
      <h1 class="text-[#ED4245] text-5xl font-bold outline-none text-center sm:flex sm:items-center sm:space-x-2">
        <span>About</span>
        <a
          class="hover:text-[#ED4245] text-white duration-500 outline-none"
          href="#about"
          id="about"
          on:click={(event) => handleAnchorClick(event, "about")}>[#]</a
        >
      </h1>

      <div class="group relative block">
        <div>
          <img
            alt="PHOTO_WITH_ME"
            src={MyImage}
            class="rounded-md absolute inset-0 w-full h-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div class="relative p-8">
            <p class="text-2xl font-bold text-white">Me, but very young ;)</p>

            <div class="mt-96">
              <div
                class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              >
                <p class="text-sm text-white">
                  This photo was taken in kindergarten for the new year, where I played the role of a clown.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <a
          class="hover:text-[#ED4245] text-white duration-500 outline-none"
          href="#bio"
          id="bio"
          on:click={(event) => handleAnchorClick(event, "bio")}>[#]</a
        >
        <p class="text-white">
          Hello, traveler! My name is Andrew, I was born in 2005 in Ukraine, I graduated from high school in 11th grade
          and went to university in Kiev. I started my path to programming in the 5th grade, when I was playing servers
          in the popular game Minecraft and I was very curious to know how it all worked under the hood. One winter, I
          was walking with my friend Ilya and told him that I supposedly know how to write plugins, and he said it was
          cool and would like to write them too, after coming home, I decided to learn how to do it in reality. That is
          how out of sheer interest I started writing code and I love it so much! I chose backend development because I
          am interested in knowing how the product works "behind the scenes", in a place where the user sees nothing and
          does not know how the information is processed, how it is stored, etc.
        </p>
      </div>

      <div>
        <a
          class="hover:text-[#ED4245] text-white duration-500 outline-none"
          href="#story-about-nickname"
          id="story-about-nickname"
          on:click={(event) => handleAnchorClick(event, "story-about-nickname")}>[#]</a
        >
        <p class="text-white">
          A little history about my nickname LWJerri. It was in 2016, I had a weak computer at the time and I always
          logged into the game Minecraft, but that day I decided to install the latest version of the game, after which
          it crashed because of an error in the library LWGL. I sat for a long time, looking at this error and for some
          reason decided to perpetuate it by taking the first two letters from that library - LW. This was not enough,
          the nickname came out too short and not unique, so I remembered my favorite cartoon Tom and Jerry and my most
          favorite character from this cartoon - little mouse Jerry. In those years my English was not very good and I
          made a mistake by writing Jerri instead of Jerry to the prefix "LW". That's how the unique nickname LWJerri
          came about.
        </p>
      </div>
    </div>

    <div class="space-y-5">
      <h1 class="text-[#ED4245] text-4xl text-center sm:flex sm:items-center sm:space-x-2">
        <div class="break-words">
          <span>What I use</span>
        </div>
        <a
          class="hover:text-[#ED4245] text-white duration-500 outline-none"
          href="#what-I-use"
          id="what-I-use"
          on:click={(event) => handleAnchorClick(event, "what-I-use")}>[#]</a
        >
      </h1>
      <p class="text-white">
        When developing projects I use different technologies and programming languages, so that the product came out as
        best as possible and satisfied my desires.
      </p>

      <h2 class="text-[#ED4245] text-xl">Languages</h2>
      <p class="text-[#22B8CF]">{languages.join(", ")}</p>

      <h2 class="text-[#ED4245] text-xl">Technologies</h2>
      <p class="text-[#22B8CF]">{technologies.join(", ")}</p>
    </div>

    <div class="space-y-5">
      <h1 class="text-[#ED4245] text-4xl text-center sm:flex sm:items-center sm:space-x-2">
        <span>Socials</span>
        <a
          class="hover:text-[#ED4245] text-white duration-500 outline-none"
          href="#contact"
          id="contact"
          on:click={(event) => handleAnchorClick(event, "contact")}>[#]</a
        >
      </h1>
      <p class="text-white">
        If you have any questions for me or you just want to talk to me about something, you can use the social networks
        below to contact me.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4">
        {#each links as { name, icon, url }}
          <a href={url} target="_blank" rel="noreferrer" class="hover:text-[#ED4245] duration-500"
            ><div class="flex items-center text-lg space-x-2">
              {@html icon}<span>{name}</span>
            </div></a
          >
        {/each}
      </div>
    </div>
  </div>

  <Footer />
</div>
