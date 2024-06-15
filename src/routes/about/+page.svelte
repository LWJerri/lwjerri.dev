<script lang="ts">
  import { onMount } from "svelte";
  import SvelteSeo from "svelte-seo";
  import Divider from "../../components/Divider.svelte";
  import IconDiscord from "../../components/svg/IconDiscord.svelte";
  import IconTelegram from "../../components/svg/IconTelegram.svelte";
  import IconTwitch from "../../components/svg/IconTwitch.svelte";
  import { handleAnchorAbout } from "../../helpers/handleAnchorAbout";
  import type { PageData } from "./$types";
  import BackgroundEducation from "./components/BackgroundEducation.svelte";
  import HobbiesAndInterests from "./components/HobbiesAndInterests.svelte";
  import Intro from "./components/Intro.svelte";
  import MyNickname from "./components/MyNickname.svelte";

  export let data: PageData;

  const PAGE_TITLE = "Andrii Zontov - About me";
  const PAGE_DESCRIPTION = "This page contains all information about my backgroud education, tech stack, hobbies, etc.";

  onMount(async () => {
    const anchor = window.location.hash.slice(1);

    if (anchor) {
      const getAnchorElement = document.getElementById(anchor);

      if (getAnchorElement) return window.scrollTo({ top: getAnchorElement.offsetTop });
    }
  });
</script>

<SvelteSeo
  title={PAGE_TITLE}
  description={PAGE_DESCRIPTION}
  openGraph={{ title: PAGE_TITLE, description: PAGE_DESCRIPTION }} />

<div class="mx-auto flex max-w-4xl flex-col space-y-16 px-1 sm:px-5">
  <div class="space-y-5">
    <div class="flex flex-row items-center justify-between text-2xl">
      <h1 class="flex items-center space-x-2 text-2xl outline-none">
        <span class="text-[#ED4245]">About</span>

        <a
          class="select-none outline-none duration-500 hover:text-[#ED4245]"
          href="#about"
          id="about"
          on:click={(event) => handleAnchorAbout(event, "about")}>[#]</a>
      </h1>

      <a class="duration-500 hover:text-[#ED4245]" href="/api/pdf" data-umami-event="Click on CV button">[CV]</a>
    </div>

    <div class="group relative block h-full select-none">
      <img
        alt="PHOTO_WITH_ME"
        src="me.webp"
        class="absolute inset-0 h-full w-full select-none rounded-md object-cover opacity-75 transition-opacity group-hover:opacity-50" />

      <div class="relative p-8">
        <p class="font-bold">Me in my happy childhood 💖</p>

        <div class="mt-96">
          <div
            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
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
        class="select-none outline-none duration-500 hover:text-[#ED4245]"
        href="#my-stack"
        id="my-stack"
        on:click={(event) => handleAnchorAbout(event, "my-stack")}>[#]</a>
    </h1>

    <p>
      When developing projects I use different technologies and programming languages, so that the product came out as
      best as possible and satisfied my desires.
    </p>

    <div class="space-y-2">
      <h2 class="text-lg text-[#ED4245]">Languages</h2>

      <p class="text-[#22B8CF]">{data.stack.languages.join(", ")}</p>
    </div>

    <div class="space-y-2">
      <h2 class="text-lg text-[#ED4245]">Technologies</h2>

      {#each Object.keys(data.stack.technologies) as technology}
        <div>
          {technology}: <span class="text-[#22B8CF]">{data.stack.technologies[technology].join(", ")}</span>
        </div>
      {/each}
    </div>
  </div>

  <div class="space-y-5">
    <h1 class="flex items-center space-x-2 text-center text-2xl">
      <span class="text-[#ED4245]">Socials</span>

      <a
        class="select-none outline-none duration-500 hover:text-[#ED4245]"
        href="#socials"
        id="socials"
        on:click={(event) => handleAnchorAbout(event, "socials")}>[#]</a>
    </h1>

    <p>
      If you have any questions you can contact with me in
      <a href={data.socials.telegram} target="_blank" class="box-decorator"><IconTelegram /><span>Telegram</span></a>
      or via
      <a href={data.socials.discord} target="_blank" class="box-decorator"><IconDiscord /><span>Discord</span></a>.
      Also, I sometimes stream on my
      <a href={data.socials.twitch} class="box-decorator"><IconTwitch /><span>Twitch</span></a>, so feel free to join
      and ask me about some thing in chat.
    </p>
  </div>
</div>
