<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  import Education from "./components/Education.svelte";
  import Hobbies from "./components/Hobbies.svelte";
  import Intro from "./components/Intro.svelte";
  import Nickname from "./components/Nickname.svelte";
  import PhotoIntro from "./components/PhotoIntro.svelte";
  import Socials from "./components/Socials.svelte";
  import Stack from "./components/Stack.svelte";
  import Works from "./components/Works.svelte";

  export let data: PageData;
  const PAGE_TITLE = "Andrii Zontov - About me";

  let usedTechnologies: Array<{ title: string; list: string[] }> = [];

  for (let type in data.technologies) {
    // @ts-ignore
    usedTechnologies.push({ title: type, list: data.technologies[type] });
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

<svelte:head>
  <title>{PAGE_TITLE}</title>

  <meta name="og:title" content="{PAGE_TITLE}" />
  <meta name="og:site_name" content="{PAGE_TITLE}" />
</svelte:head>

<div class="mx-auto flex max-w-4xl flex-col space-y-16 px-5" role="main">
  <div class="space-y-5">
    <PhotoIntro />
    <Intro />

    <div class="divider uppercase text-[#5865F2]">Hobbies & Interests</div>

    <Hobbies />

    <div class="divider uppercase text-[#5865F2]">Background Education</div>

    <Education />

    <div class="divider uppercase text-[#5865F2]">Best Works</div>

    <Works />

    <div class="divider uppercase text-[#5865F2]">About My Nickname</div>

    <Nickname />
  </div>

  <div class="space-y-5">
    <Stack {data} {usedTechnologies} />
  </div>

  <div class="space-y-5">
    <Socials {data} />
  </div>
</div>
