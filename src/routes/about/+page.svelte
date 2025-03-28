<script lang="ts">
  import { onMount } from "svelte";
  import SvelteSeo from "svelte-seo";
  import Divider from "../../components/Divider.svelte";
  import Social from "../../components/Social.svelte";
  import { anchorGo } from "../../helpers/anchorGo";
  import { handleAnchorAbout } from "../../helpers/handleAnchorAbout";
  import type { PageData } from "./$types";
  import BackgroundEducation from "./components/BackgroundEducation.svelte";
  import HobbiesAndInterests from "./components/HobbiesAndInterests.svelte";
  import Intro from "./components/Intro.svelte";
  import MyNickname from "./components/MyNickname.svelte";

  export let data: PageData;

  const PAGE_TITLE = "Andrii Zontov - About me";
  const PAGE_DESCRIPTION = "This page contains all information about my backgroud education, tech stack, hobbies, etc.";

  onMount(async () => anchorGo());
</script>

<SvelteSeo
  title={PAGE_TITLE}
  description={PAGE_DESCRIPTION}
  openGraph={{ title: PAGE_TITLE, description: PAGE_DESCRIPTION }}
/>

<div class="mx-auto flex max-w-4xl flex-col space-y-16 px-1 sm:px-5">
  <div class="space-y-5">
    <div class="flex flex-row items-center justify-between text-2xl">
      <h1 class="flex items-center space-x-2 text-2xl outline-hidden">
        <span class="text-[#ED4245]">About</span>

        <a
          class="outline-hidden duration-500 select-none hover:text-[#ED4245]"
          href="#about"
          id="about"
          data-umami-event="Share 'About'"
          on:click={(event) => handleAnchorAbout(event, "about")}>[#]</a
        >
      </h1>

      <a class="duration-500 hover:text-[#ED4245]" href="/api/pdf" data-umami-event="Download CV">[CV]</a>
    </div>

    <div class="group relative block h-full select-none">
      <img
        alt="PHOTO_WITH_ME"
        src="me.webp"
        class="absolute inset-0 h-full w-full rounded-md object-cover opacity-75 transition-opacity select-none group-hover:opacity-50"
      />

      <div class="relative p-8">
        <p class="font-bold">Me in my happy childhood 💖</p>

        <div class="mt-96">
          <div
            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
          >
            <p>This photo was taken in kindergarten for the new year, where I played the role of a clown.</p>
          </div>
        </div>
      </div>
    </div>

    <Intro text={data.introduce} />

    <Divider text="Hobbies & Interests" />

    <HobbiesAndInterests />

    <Divider text="Background Education" />

    <BackgroundEducation />

    <Divider text="My Nickname" />

    <MyNickname />
  </div>

  <div class="space-y-5">
    <h1 class="flex items-center space-x-2 text-2xl">
      <div class="break-words">
        <span class="text-[#ED4245]">My stack</span>
      </div>

      <a
        class="outline-hidden duration-500 select-none hover:text-[#ED4245]"
        href="#my-stack"
        id="my-stack"
        data-umami-event="Share 'My stack'"
        on:click={(event) => handleAnchorAbout(event, "my-stack")}>[#]</a
      >
    </h1>

    <p>
      When developing projects I use different technologies and programming languages, so that the product came out as
      best as possible and satisfied my desires.
    </p>

    <div class="space-y-2">
      <h2 class="text-lg text-[#ED4245]">Languages</h2>

      <p class="text-[#5862F2]">{data.stack.languages.join(", ")}</p>
    </div>

    <div class="space-y-2">
      <h2 class="text-lg text-[#ED4245]">Technologies</h2>

      {#each Object.keys(data.stack.technologies) as technology}
        <div>
          {technology}: <span class="text-[#5862F2]">{data.stack.technologies[technology].join(", ")}</span>
        </div>
      {/each}
    </div>
  </div>

  <div class="space-y-5">
    <h1 class="flex items-center space-x-2 text-2xl">
      <div class="break-words">
        <span class="text-[#ED4245]">Socials</span>
      </div>

      <a
        class="outline-hidden duration-500 select-none hover:text-[#ED4245]"
        href="#socials"
        id="socials"
        data-umami-event="Share 'Socials'"
        on:click={(event) => handleAnchorAbout(event, "socials")}>[#]</a
      >
    </h1>

    <p>
      If you have any questions you can contact with me in <Social social="telegram" /> or via
      <Social social="discord" />. Also, I sometimes stream on my <Social social="twitch" />, so feel free to join and
      ask me about some thing in chat.
    </p>
  </div>
</div>
