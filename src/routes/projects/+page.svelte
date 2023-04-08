<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$types";

  interface Project {
    name: string;
    description: string;
    stack: string[];
    emoji?: string;
    url?: string;
    github?: string;
  }

  export let data: PageData;

  let projects: Project[] = data.projects;

  onMount(async () => {
    const anchor = window.location.hash.slice(1);

    if (anchor) {
      const findElement = document.getElementById(anchor);

      if (findElement) {
        findElement.getElementsByTagName("details")[0].open = true;

        if (findElement) {
          window.scrollTo({ top: findElement.offsetTop, behavior: "smooth" });
        }
      }
    }
  });

  function handleAnchorClick(event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) {
    event.preventDefault();

    const link = event.currentTarget;
    const anchor = new URL(link.href).hash;

    const findByAnchor = document.getElementById(anchor.slice(1));

    if (findByAnchor) {
      const findBtns = findByAnchor.children[0].children[3];
      const findShareBtn = findBtns.children[findBtns.children.length - 1];

      navigator.clipboard.writeText(`${origin}${window.location.pathname}${anchor}`);

      findShareBtn.innerHTML = "[Copied]";

      setTimeout(() => {
        findShareBtn.innerHTML = "[Share]";
      }, 2000);
    }
  }
</script>

<svelte:head>
  <title>Andrey Zontov - My projects</title>
</svelte:head>

<div class="flex flex-col space-y-5 place-items-center scroll-smooth">
  {#each projects as { name, description, stack, emoji, url, github }, id}
    {@const isLongDescription = description.length > 45 && description.length > 48}

    {@const shortDescription = !description.length
      ? "Description will be added soon."
      : isLongDescription
      ? description.slice(0, 45) + "..."
      : description}

    {@const longDescription = isLongDescription ? "..." + description.slice(45) : ""}

    <div class="max-w-screen-md" id="project-{id}">
      <details class="group rounded-md w-full p-2 bg-[#1D2123] [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex items-center justify-center cursor-pointer">
          <div class="hidden sm:block text-4xl select-none">{emoji ?? ""}</div>
          <div>
            <span class="text-xl select-none">{name}</span><br /><span class="text-lg text-[#3F4549]"
              >{shortDescription}</span
            >
          </div>

          <svg
            class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-500 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>

        <p class="text-[#6e767c]">{longDescription}</p>

        <div class="flex mt-6 text-[#22B8CF]">{stack.join(", ")}</div>

        <div class="w-full flex flex-row justify-end space-x-2 text-xl select-none">
          {#if url}
            <a class="hover:text-[#ED4245] duration-500" target="_blank" rel="noreferrer" href={url}>[URL]</a>
          {/if}

          {#if github}
            <a class="hover:text-[#ED4245] duration-500" target="_blank" rel="noreferrer" href={github}>[GitHub]</a>
          {/if}

          <a
            class="hover:text-[#ED4245] duration-500 outline-none"
            target="_self"
            rel="noreferrer"
            href="#project-{id}"
            on:click={(event) => handleAnchorClick(event)}>[Share]</a
          >
        </div>
      </details>
    </div>
  {/each}
</div>
