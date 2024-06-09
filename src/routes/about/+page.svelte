<script lang="ts">
  import { onMount } from "svelte";
  import SvelteSeo from "svelte-seo";
  import Divider from "../../components/Divider.svelte";
  import { handleAnchorAbout } from "../../helpers/handleAnchorAbout";
  import type { PageData } from "./$types";
  import BackgroundEducation from "./components/BackgroundEducation.svelte";
  import HobbiesAndInterests from "./components/HobbiesAndInterests.svelte";
  import Intro from "./components/Intro.svelte";
  import MyNickname from "./components/MyNickname.svelte";

  export let data: PageData;
  const PAGE_TITLE = "Andrii Zontov - About me";

  let technologies: Array<{ title: string; list: string[] }> = [];

  const telegram = `<a href=${data.socials.telegram} target="_blank" class="box-decorator"><IconTelegram /><span>Telegram</span></a>`;
  const discord = `<a href=${data.socials.discord} target="_blank" class="box-decorator"><IconDiscord /><span>Discord</span></a>`;
  const twitch = `<a href=${data.socials.twitch} class="box-decorator"><IconTwitch /><span>Twitch</span></a>`;

  for (let type in data.technologies) {
    // @ts-ignore
    technologies.push({ title: type, list: data.technologies[type] });
  }

  onMount(async () => {
    const anchor = window.location.hash.slice(1);

    if (anchor) {
      const getAnchorElement = document.getElementById(anchor);

      if (getAnchorElement) {
        getAnchorElement.getElementsByTagName("input")[0].checked = true;

        if (getAnchorElement) {
          window.scrollTo({ top: getAnchorElement.offsetTop, behavior: "auto" });
        }
      }
    }
  });
</script>

<SvelteSeo title={PAGE_TITLE} openGraph={{ title: PAGE_TITLE, site_name: PAGE_TITLE }} />

<div class="mx-auto flex max-w-4xl flex-col space-y-16 px-1 sm:px-5">
  <div class="space-y-5">
    <div class="flex flex-row items-center justify-between text-2xl font-bold">
      <h1 class="text-[#ED4245] outline-none">About</h1>

      <!-- <a class="duration-500 hover:text-[#ED4245]" href="cv.pdf" data-umami-event="Click on CV button"
        >[CV]</a
      > -->
    </div>

    <div class="group relative block">
      <div>
        <img
          alt="PHOTO_WITH_ME"
          src="me.webp"
          class="absolute inset-0 h-full w-full select-none rounded-md object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div class="relative p-8">
          <p class="font-bold">Me, but very young ;)</p>

          <div class="mt-96">
            <div
              class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
            >
              <p>This photo was taken in kindergarten for the new year, where I played the role of a clown.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Intro />

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
        on:click={(event) => handleAnchorAbout(event, "my-stack")}>[#]</a
      >
    </h1>

    <p>
      When developing projects I use different technologies and programming languages, so that the product came out as
      best as possible and satisfied my desires.
    </p>

    <div class="space-y-2">
      <h2 class="text-lg text-[#ED4245]">Languages</h2>

      <p class="text-[#22B8CF]">
        {@html data.languages.join(", ").replaceAll("*", "<span class='text-white'>*</span>")}
      </p>
    </div>

    <div class="space-y-2">
      <h2 class="text-lg text-[#ED4245]">Technologies</h2>

      {#each technologies as techology}
        <div>
          {techology.title}: {@html `<span class="text-[#22B8CF]">${techology.list.join(", ")}</span>`}
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
        on:click={(event) => handleAnchorAbout(event, "socials")}>[#]</a
      >
    </h1>

    <p>
      If you have any questions you can contact with me via {@html telegram} or through
      {@html discord}. Also, I sometimes stream on my
      {@html twitch}, so feel free to join and ask me about some thing in chat.
    </p>
  </div>
</div>
