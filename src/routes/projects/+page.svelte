<script lang="ts">
  import { IconChevronDown, IconEggFried } from "@tabler/icons-svelte";
  import { onMount } from "svelte";
  import { handleAnchorProjects } from "../../helpers/handleAnchorProjects";
  import type { Project } from "../../interfaces";
  import type { PageData } from "./$types";
  import AdditionalProjects from "./components/AdditionalProjects.svelte";

  export let data: PageData;
  const PAGE_TITLE = "Andrii Zontov - My projects";

  const projects: Project[] = data.projects.sort(
    (a: Project, b: Project) => Number(a.isArchived) - Number(b.isArchived),
  );

  onMount(async () => {
    const anchor = window.location.hash.slice(1);

    if (anchor) {
      const getAnchor = document.getElementById(anchor);

      if (getAnchor) {
        getAnchor.getElementsByTagName("details")[0].open = true;

        if (getAnchor) {
          window.scrollTo({ top: getAnchor.offsetTop, behavior: "smooth" });
        }
      }
    }
  });
</script>

<svelte:head>
  <title>{PAGE_TITLE}</title>

  <meta name="og:title" content={PAGE_TITLE} />
  <meta name="og:site_name" content={PAGE_TITLE} />
</svelte:head>

<div class="mx-auto max-w-4xl space-y-5" role="main">
  <div class="flex flex-col place-items-center space-y-5">
    {#if projects.length}
      {#each projects as { name, description, stack, emoji, url, github, isArchived }, id}
        {@const isLongDescription = description.length > 45 && description.length > 48}
        {@const getShortDescription = isLongDescription ? description.slice(0, 45) + "..." : description}
        {@const longDescription = isLongDescription ? "..." + description.slice(45) : ""}

        <div id="project-{id}">
          <details class="group w-full rounded-md bg-[#1D2123] p-2 [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex cursor-pointer items-center justify-center">
              <div class="hidden select-none text-4xl sm:block">{isArchived || !emoji ? "📃" : emoji}</div>

              <div class="flex flex-col">
                <div class="flex justify-between">
                  <span>{name}</span>

                  {#if isArchived}
                    <span
                      class="ml-2 inline-flex items-center justify-center rounded-md bg-[#0C0E10] px-2.5 py-0.5 text-[#ED4245]"
                    >
                      <p class="whitespace-nowrap text-sm uppercase">Archived</p>
                    </span>
                  {/if}
                </div>

                <span class="text-lg text-[#3F4549]">
                  {!description.length ? "Description will be added soon." : getShortDescription}
                </span>
              </div>

              <div class="mx-2">
                <IconChevronDown
                  size={24}
                  stroke={1.5}
                  class="flex-shrink-0 transition duration-500 group-open:-rotate-180"
                />
              </div>
            </summary>

            <p class="text-[#6e767c]">{longDescription}</p>

            <div class="mt-6 flex text-[#22B8CF]">{stack.join(", ")}</div>

            <div class="flex w-full select-none flex-row justify-end space-x-2 text-xl">
              {#if url}
                <a class="duration-500 hover:text-[#ED4245]" target="_blank" rel="noreferrer" href={url}>[URL]</a>
              {/if}

              {#if github}
                <a class="duration-500 hover:text-[#ED4245]" target="_blank" rel="noreferrer" href={github}>[GitHub]</a>
              {/if}

              <a
                class="outline-none duration-500 hover:text-[#ED4245]"
                target="_self"
                rel="noreferrer"
                href="#project-{id}"
                on:click={(event) => handleAnchorProjects(event)}>[Share]</a
              >
            </div>
          </details>
        </div>
      {/each}
    {:else}
      <div class="alert rounded-md bg-[#1C2125] text-white">
        <IconEggFried size={24} stroke={1.5} />

        <p>At the moment the projects list is empty ;/</p>
      </div>
    {/if}
  </div>

  {#if data.additionalProjects.length}
    <div class="divider my-5 uppercase text-[#5865F2]">Additional Projects</div>

    <AdditionalProjects projects={data.additionalProjects} />
  {/if}
</div>
