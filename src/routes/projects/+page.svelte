<script lang="ts">
  import { Seo } from "@svelte-bin/seo";
  import { onMount } from "svelte";
  import ProjectCard from "../../components/project/ProjectCard.svelte";
  import Fallback from "../../components/ui/Fallback.svelte";
  import { anchorGo } from "../../helpers/anchorGo";
  import type { PageData } from "./$types";

  export let data: PageData;

  const PAGE_TITLE = "Andrii Zontov - My projects";
  const PAGE_DESCRIPTION = "This page contains information about my projects, their descriptions, technologies, etc.";

  onMount(async () => anchorGo());
</script>

<Seo
  title={PAGE_TITLE}
  description={PAGE_DESCRIPTION}
  openGraph={{ title: PAGE_TITLE, description: PAGE_DESCRIPTION }}
/>

{#if !data.projects.length}
  <Fallback title="So silent here..." message="More projects will be added soon." />
{:else}
  <div class="mx-auto grid w-full max-w-4xl gap-4 px-1 sm:px-5">
    {#each data.projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
{/if}
