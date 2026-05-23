<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import { scrollToHash } from "$lib/navigation/scrollToHash";
  import { Seo } from "@svelte-bin/seo";
  import AboutSection from "../../components/about/AboutSection.svelte";
  import MyStackSection from "../../components/about/MyStackSection.svelte";
  import SocialSection from "../../components/about/SocialSection.svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();

  const PAGE_TITLE = "Andrii Zontov - About me";
  const PAGE_DESCRIPTION = "This page contains all information about my backgroud education, tech stack, hobbies, etc.";

  afterNavigate(() => scrollToHash());
</script>

<Seo
  title={PAGE_TITLE}
  description={PAGE_DESCRIPTION}
  openGraph={{ title: PAGE_TITLE, description: PAGE_DESCRIPTION }}
/>

<div class="mx-auto flex max-w-4xl flex-col space-y-10 px-1 sm:space-y-20 sm:px-5">
  <AboutSection imagesCarousel={data.imagesCarousel} />
  <MyStackSection stack={data.stack} />
  <SocialSection socials={data.socials} />
</div>
