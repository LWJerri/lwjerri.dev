<script lang="ts">
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import { onMount } from "svelte";

  interface Projects {
    name: string;
    description: string;
    stack: Array<string>;
    emoji?: string;
    url?: string;
    github?: string;
  }

  let projects = [] as Array<Projects>;

  onMount(async () => {
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

<div class="flex flex-col min-h-screen justify-between bg-[#0C0E10] scroll-smooth" style="font-family: Monocraft;">
  <div>
    <Navbar />

    <div class="flex flex-col space-y-5 place-items-center">
      {#each projects as { name, description, stack, emoji, url, github }, id}
        <div
          id="project-{id}"
          tabindex="-1"
          class="w-full md:w-11/12 lg:w-10/12 xl:w-1/2 collapse collapse-arrow bg-[#1D2123] rounded-none"
        >
          <input class="checkbox-panel" type="checkbox" />

          <div class="collapse-title">
            <div class="flex items-center space-x-2">
              <div class="text-4xl select-noqne">{emoji ?? ""}</div>
              <div>
                <span class="text-xl text-white">{name}</span><br /><span class="text-lg text-[#3F4549]"
                  >{!description.length
                    ? "Description will be added soon."
                    : description.length > 45
                    ? description.slice(0, 45) + "..."
                    : description}</span
                >
              </div>
            </div>
          </div>

          <div class="collapse-content">
            <p>{description}</p>

            <div class="flex mt-6 text-[#22B8CF]">
              {stack.join(", ")}
            </div>

            <div class="w-full flex flex-row justify-end space-x-2 text-xl">
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
          </div>
        </div>
      {/each}
    </div>
  </div>

  <Footer />
</div>
