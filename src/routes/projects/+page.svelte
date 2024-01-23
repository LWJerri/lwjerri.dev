<script lang="ts">
  import { onMount } from "svelte";
  import type { Project } from "../../interfaces";
  import type { PageData } from "./$types";

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

<div class="mx-auto">
  {#each projects as project}
    {project.name}
  {/each}
</div>

<!-- <div class="mx-auto w-1/4 space-y-5" role="main">
  <div class="flex flex-col place-items-center space-y-5">
    <div class="w-full bg-[#1D2123]">ewfregtewfregtewfregtewfregtewfregtewfregt</div>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 transition duration-500 group-open:-rotate-180"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          <path
            d="M14 3a5 5 0 0 1 4.872 6.13a3 3 0 0 1 .178 5.681a3 3 0 1 1 -4.684 3.626a5 5 0 1 1 -8.662 -5a5 5 0 1 1 4.645 -8.856a4.982 4.982 0 0 1 3.651 -1.585z"
          ></path>
        </svg>

        <p>At the moment the projects list is empty ;/</p>
      </div>
    {/if}
  </div>
</div> -->
