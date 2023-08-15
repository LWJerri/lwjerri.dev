<script lang="ts">
  import { onMount } from "svelte";
  import AboutMe from "../../components/about/AboutMe.svelte";
  import AboutMeHeader from "../../components/about/AboutMeHeader.svelte";
  import AboutMyNickname from "../../components/about/AboutMyNickname.svelte";
  import BackgroundEducation from "../../components/about/BackgroundEducation.svelte";
  import BestWorks from "../../components/about/BestWorks.svelte";
  import HobbiesAndInterests from "../../components/about/HobbiesAndInterests.svelte";
  import Socials from "../../components/about/Socials.svelte";
  import WhatIUse from "../../components/about/WhatIUse.svelte";
  import type { PageData } from "./$types";

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
      const findElement = document.getElementById(anchor);

      if (findElement) {
        findElement.getElementsByTagName("input")[0].checked = true;

        if (findElement) {
          window.scrollTo({ top: findElement.offsetTop, behavior: "auto" });
        }
      }
    }
  });
</script>

<svelte:head>
  <title>{PAGE_TITLE}</title>

  <meta property="og:title" content="{PAGE_TITLE}" />
  <meta name="og:site_name" content="{PAGE_TITLE}" />
</svelte:head>

<div class="mx-auto flex max-w-4xl flex-col space-y-16 px-5">
  <div class="space-y-5">
    <AboutMeHeader />
    <AboutMe />

    <div class="divider uppercase text-[#5865F2]">Hobbies & Interests</div>

    <HobbiesAndInterests />

    <div class="divider uppercase text-[#5865F2]">Background education</div>

    <BackgroundEducation />

    <div class="divider uppercase text-[#5865F2]">Best works</div>

    <BestWorks />

    <div class="divider uppercase text-[#5865F2]">About my nickname</div>

    <AboutMyNickname />
  </div>

  <div class="space-y-5">
    <WhatIUse {data} {usedTechnologies} />
  </div>

  <div class="space-y-5">
    <Socials {data} />
  </div>
</div>
