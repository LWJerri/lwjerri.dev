<script lang="ts">
  import { Seo } from "@svelte-bin/seo";
  import { onMount } from "svelte";
  import AboutSection from "../../components/about/AboutSection.svelte";
  import MyStackSection from "../../components/about/MyStackSection.svelte";
  import SocialSection from "../../components/about/SocialSection.svelte";
  import { anchorGo } from "../../helpers/anchorGo";

  const PAGE_TITLE = "Andrii Zontov - About me";
  const PAGE_DESCRIPTION = "This page contains all information about my backgroud education, tech stack, hobbies, etc.";

  onMount(async () => anchorGo());
</script>

<Seo
  title={PAGE_TITLE}
  description={PAGE_DESCRIPTION}
  openGraph={{ title: PAGE_TITLE, description: PAGE_DESCRIPTION }}
/>

<div class="mx-auto flex max-w-4xl flex-col space-y-10 px-1 sm:space-y-20 sm:px-5">
  <AboutSection />
  <MyStackSection />
  <SocialSection />
</div>
