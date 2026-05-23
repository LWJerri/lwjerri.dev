<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import { scrollToHash } from "$lib/navigation/scrollToHash";
  import AboutSection from "../../components/about/AboutSection.svelte";
  import MyStackSection from "../../components/about/MyStackSection.svelte";
  import SocialSection from "../../components/about/SocialSection.svelte";
  import Page from "../../components/layout/Page.svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();

  afterNavigate(() => scrollToHash());
</script>

<Page class="space-y-10 sm:space-y-20">
  <AboutSection imagesCarousel={data.imagesCarousel} />
  <MyStackSection stack={data.stack} />
  <SocialSection socials={data.socials} />
</Page>
