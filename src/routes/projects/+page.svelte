<script lang="ts">
  import { onMount } from "svelte";
  import { handleAnchorProjects } from "../../helpers/handleAnchorProjects";
  import type { Project } from "../../interfaces";
  import type { PageData } from "./$types";

  export let data: PageData;
  const PAGE_TITLE = "Andrii Zontov - My projects";

  const projects: Project[] = data.projects.sort((a: Project, b: Project) => Number(a.isClosed) - Number(b.isClosed));

  onMount(async () => {
    const anchor = window.location.hash.slice(1);

    if (anchor) {
      const findElement = document.getElementById(anchor);

      if (findElement) {
        findElement.getElementsByTagName("details")[0].open = true;

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

<div class="mx-auto max-w-4xl space-y-5">
  <div class="flex flex-col place-items-center space-y-5">
    {#each projects as { name, description, stack, emoji, url, github, isClosed }, id}
      {@const isLongDescription = description.length > 45 && description.length > 48}
      {@const getShortDescription = isLongDescription ? description.slice(0, 45) + "..." : description}
      {@const longDescription = isLongDescription ? "..." + description.slice(45) : ""}

      <div id="project-{id}">
        <details class="group w-full rounded-md bg-[#1D2123] p-2 [&_summary::-webkit-details-marker]:hidden">
          <summary class="flex cursor-pointer items-center justify-center">
            <div class="hidden select-none text-4xl sm:block">{isClosed || !emoji ? "📃" : emoji}</div>

            <div class="flex flex-col">
              <div class="flex justify-between">
                <span>{name}</span>

                {#if isClosed}
                  <span
                    class="inline-flex items-center justify-center rounded-md bg-[#0C0E10] px-2.5 py-0.5 text-[#ED4245]"
                  >
                    <p class="whitespace-nowrap text-sm uppercase">Closed</p>
                  </span>
                {/if}
              </div>

              <span class="text-lg text-[#3F4549]">
                {!description.length ? "Description will be added soon." : getShortDescription}
              </span>
            </div>

            <div class="mx-2">
              <svg
                class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-500 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </summary>

          <p class="text-[#6e767c]">{longDescription}</p>

          <div class="mt-6 flex text-[#22B8CF]">{stack.join(", ")}</div>

          <div class="flex w-full select-none flex-row justify-end space-x-2 text-xl">
            {#if url}
              <a
                class="duration-500 hover:text-[#ED4245]"
                target="_blank"
                rel="noreferrer"
                href="{url}"
                data-umami-event="{`Open ${name} project main URL`}">[URL]</a
              >
            {/if}

            {#if github}
              <a
                class="duration-500 hover:text-[#ED4245]"
                target="_blank"
                rel="noreferrer"
                href="{github}"
                data-umami-event="{`Open ${name} project GitHub`}">[GitHub]</a
              >
            {/if}

            <a
              class="outline-none duration-500 hover:text-[#ED4245]"
              target="_self"
              rel="noreferrer"
              href="#project-{id}"
              data-umami-event="{`Copy ${name} project URL to clipboard`}"
              on:click="{(event) => handleAnchorProjects(event)}">[Share]</a
            >
          </div>
        </details>
      </div>
    {/each}
  </div>
</div>
