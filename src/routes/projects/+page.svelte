<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import { scrollToHash } from "$lib/navigation/scrollToHash";
  import { Seo } from "@svelte-bin/seo";
  import Page from "../../components/layout/Page.svelte";
  import ProjectCard from "../../components/project/ProjectCard.svelte";
  import Fallback from "../../components/ui/Fallback.svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();

  const PAGE_TITLE = "Andrii Zontov - My projects";
  const PAGE_DESCRIPTION = "This page contains information about my projects, their descriptions, technologies, etc.";

  afterNavigate(() => scrollToHash());
</script>

<Seo
  title={PAGE_TITLE}
  description={PAGE_DESCRIPTION}
  openGraph={{ title: PAGE_TITLE, description: PAGE_DESCRIPTION }}
/>

<Page centered={!data.projects.length}>
  {#if !data.projects.length}
    <Fallback title="So silent here..." message="More projects will be added soon." />
  {:else}
    <div class="grid w-full content-start gap-4">
      {#each data.projects as project}
        <ProjectCard {project} />
      {/each}
    </div>
  {/if}
</Page>
