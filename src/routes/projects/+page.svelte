<script lang="ts">
  import { Seo } from "@svelte-bin/seo";
  import { onMount } from "svelte";
  import Fallback from "../../components/Fallback.svelte";
  import { anchorGo } from "../../helpers/anchorGo";
  import { handleAnchorProjects } from "../../helpers/handleAnchorProjects";
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
  <Fallback title="So silent here..." details="More projects will be added soon." />
{:else}
  <div class="mx-auto grid w-full max-w-4xl gap-4 px-1 sm:px-5">
    {#each data.projects as project, id}
      <div class="pointer-events-none rounded-md bg-[#1D2123] p-4" id="project-{id}">
        <div class="space-y-5">
          <div class="flex items-center justify-between">
            <h1 class="text-lg">{project.name}</h1>

            {#if project.isClosed}
              <p class="box-decorator bg-[#ED4245]">Closed</p>
            {/if}
          </div>

          <p>{project.description.length ? project.description : "Description will be added soon..."}</p>

          <div class="flex flex-wrap gap-2">
            {#each project.stack as technology}
              <div class="box-decorator bg-[#5862F2]">{technology}</div>
            {/each}
          </div>

          <div class="pointer-events-auto flex items-center justify-end gap-2">
            {#if project.urls}
              {#each project.urls as url, i}
                {@const title = `[URL #${i + 1}]`}

                <a class="duration-500 hover:text-[#ED4245]" target="_blank" rel="noreferrer" href={url}>{title}</a>
              {/each}
            {/if}

            {#if project.github}
              <a class="duration-500 hover:text-[#ED4245]" target="_blank" rel="noreferrer" href={project.github}
                >[GitHub]</a
              >
            {/if}

            <a
              class="outline-hidden duration-500 hover:text-[#ED4245]"
              target="_self"
              rel="noreferrer"
              href="#project-{id}"
              on:click={(event) => handleAnchorProjects(event)}>[Share]</a
            >
          </div>
        </div>
      </div>
    {/each}
  </div>
{/if}
