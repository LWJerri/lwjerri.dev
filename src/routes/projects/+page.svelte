<script lang="ts">
  import { onMount } from "svelte";
  import SvelteSeo from "svelte-seo";
  import Fallback from "../../components/Fallback.svelte";
  import IconChevronDown from "../../components/svg/IconChevronDown.svelte";
  import { handleAnchorProjects } from "../../helpers/handleAnchorProjects";
  import type { PageData } from "./$types";

  export let data: PageData;
  const PAGE_TITLE = "Andrii Zontov - My projects";

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

<SvelteSeo title={PAGE_TITLE} openGraph={{ title: PAGE_TITLE, site_name: PAGE_TITLE }} />

{#if !data.projects.length}
  <Fallback title="So silent here..." details="More projects will be added soon." />
{:else}
  <div class="mx-auto max-w-5xl space-y-5 px-1 sm:px-5">
    <div class="flex flex-col items-center space-y-5">
      {#each data.projects as { name, description, stack, emoji, url, github, isClosed }, id}
        {@const isLongDescription = description.length > 50}
        {@const getShortDescription = isLongDescription ? description.slice(0, 50) + "..." : description}
        {@const longDescription = isLongDescription ? "..." + description.slice(50) : ""}

        <div id="project-{id}">
          <details class="group w-full rounded-md bg-[#1D2123] p-2 [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex cursor-pointer items-center justify-center">
              <div class="hidden select-none text-5xl sm:block">{isClosed || !emoji ? "📃" : emoji}</div>

              <div class="flex flex-col">
                <div class="flex items-center justify-between">
                  <span class="text-lg">{name}</span>

                  {#if isClosed}
                    <span class="whitespace-nowrap rounded-md bg-[#0C0E10] px-2.5 py-0.5 uppercase text-[#ED4245]">
                      Closed
                    </span>
                  {/if}
                </div>

                <span class="text-[#3F4549]">
                  {!description.length ? "Description will be added soon." : getShortDescription}
                </span>
              </div>

              <div class="mx-2">
                <IconChevronDown className="flex-shrink-0 transition duration-500 group-open:-rotate-180" />
              </div>
            </summary>

            <p class="text-[#6e767c]">{longDescription}</p>

            <div class="mt-6 flex text-[#22B8CF]">{stack.join(", ")}</div>

            <div class="flex w-full select-none flex-row justify-end space-x-2 text-lg">
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
    </div>
  </div>
{/if}
