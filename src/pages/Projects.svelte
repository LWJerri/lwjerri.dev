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

  $: projects = [] as Array<Projects>;

  onMount(async () => {
    webVitals({ path });

    await projectsList();

    const anchor = window.location.hash.slice(1);

    if (anchor) {
      const findElement = document.getElementById(anchor);

      findElement.getElementsByTagName("input")[0].checked = true;

      if (findElement) {
        window.scrollTo({
          top: findElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  });

  async function projectsList() {
    const projectsListRequest = await fetch("https://api.lwjerri.dev/data");
    const { projects: requestsListWithProjects } = await projectsListRequest.json();

    projects = [...requestsListWithProjects];
  }

  function handleAnchorClick(event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) {
    event.preventDefault();

    const link = event.currentTarget;
    const anchor = new URL(link.href).hash;

    const findBtns = document.getElementById(anchor.slice(1)).children[2].children[2];
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

    <div class="flex flex-col space-y-5 place-items-center">
      {#each projects as { name, description, stack, emoji, url, github }, id}
        {@const isHaveBigDescription = description.length > 45}

        <div class="max-w-screen-md">
          <details class="group rounded-md w-full p-2 bg-[#1D2123] [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex items-center justify-center cursor-pointer">
              <div class="text-2xl md:text-4xl select-none">{emoji ?? ""}</div>
              <div>
                <span class="text-xl text-white">{name}</span><br /><span class="text-lg text-[#3F4549]"
                  >{!description.length
                    ? "Description will be added soon."
                    : isHaveBigDescription
                    ? description.slice(0, 45) + "..."
                    : description}</span
                >
              </div>

              <svg
                class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <p>{isHaveBigDescription && description ? "..." + description.slice(45) : description}</p>

            <div class="flex mt-6 text-[#22B8CF]">
              {stack.join(", ")}
            </div>

            <div class="w-full flex flex-row justify-end space-x-2 text-xl select-none">
              {#if url}
                <a class="hover:text-[#ED4245] text-white duration-500" target="_blank" rel="noreferrer" href={url}
                  >[URL]</a
                >
              {/if}

              {#if github}
                <a class="hover:text-[#ED4245] text-white duration-500" target="_blank" rel="noreferrer" href={github}
                  >[GitHub]</a
                >
              {/if}

              <a
                class="hover:text-[#ED4245] text-white duration-500 outline-none"
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
  </div>

  <Footer />
</div>
