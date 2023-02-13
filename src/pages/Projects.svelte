<script lang="ts">
  import { onMount } from "svelte";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
  import { webVitals } from "../helpers/vitals";

  const {
    location: { pathname: path },
  } = window;

  interface Projects {
    name: string;
    description: string;
    stack: Array<string>;
    emoji?: string;
    url?: string;
    github?: string;
  }

  $: projectsData = { isError: false, projects: [] } as { isError: boolean; projects: Array<Projects> };

  onMount(async () => {
    webVitals({ path });

    await projectsListRequest();

    const anchor = window.location.hash.slice(1);

    if (anchor) {
      const findElement = document.getElementById(anchor);

      findElement.getElementsByTagName("details")[0].open = true;

      if (findElement) {
        window.scrollTo({
          top: findElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  });

  async function projectsListRequest() {
    try {
      const dataRequest = await fetch("https://api.lwjerri.dev/data");
      const { projects: listWithProjects } = await dataRequest.json();

      projectsData.projects = [...listWithProjects];
    } catch {
      projectsData.isError = true;
      projectsData.projects = [
        {
          name: "Empty :c",
          description: "Can't load all projects. Please, refresh page!",
          stack: ["Whoops!", "Errrrrrorrr!"],
        },
      ];
    }
  }

  function handleAnchorClick(event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) {
    event.preventDefault();

    const link = event.currentTarget;
    const anchor = new URL(link.href).hash;

    const findBtns = document.getElementById(anchor.slice(1)).children[0].children[3];
    const findShareBtn = findBtns.children[findBtns.children.length - 1];

    const {
      location: { origin, pathname },
    } = window;

    navigator.clipboard.writeText(`${origin}${pathname}${anchor}`);

    findShareBtn.innerHTML = "[Copied]";

    setTimeout(() => {
      findShareBtn.innerHTML = "[Share]";
    }, 2000);
  }
</script>

<svelte:head>
  <title>Andrey Zontov - [Projects]</title>
</svelte:head>

<div class="flex flex-col min-h-screen justify-between bg-[#0C0E10] scroll-smooth" style="font-family: Monocraft;">
  <div>
    <Navbar />

    <div class="flex text-white flex-col space-y-5 place-items-center">
      {#each projectsData.projects as { name, description, stack, emoji, url, github }, id}
        {@const isLongDescription = description.length > 45 && description.length > 48}
        {@const { isError } = projectsData}

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

            <div class="flex mt-6 text-[#22B8CF]">
              {stack.join(", ")}
            </div>

            <div class="w-full flex flex-row justify-end space-x-2 text-xl select-none">
              {#if url}
                <a class="hover:text-[#ED4245] duration-500" target="_blank" rel="noreferrer" href={url}>[URL]</a>
              {/if}

              {#if github}
                <a class="hover:text-[#ED4245] duration-500" target="_blank" rel="noreferrer" href={github}>[GitHub]</a>
              {/if}

              {#if !isError}<a
                  class="hover:text-[#ED4245] duration-500 outline-none"
                  target="_self"
                  rel="noreferrer"
                  href="#project-{id}"
                  on:click={(event) => handleAnchorClick(event)}>[Share]</a
                >{/if}
            </div>
          </details>
        </div>
      {/each}
    </div>
  </div>

  <Footer />
</div>
