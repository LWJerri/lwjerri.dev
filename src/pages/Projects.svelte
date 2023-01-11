<script lang="ts">
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";

  const projects = [] as Array<{
    name: string;
    description: string;
    stack: Array<string>;
    emoji?: string;
    url?: string;
    github?: string;
  }>;
</script>

<div class="flex flex-col min-h-screen justify-between bg-[#0C0E10]" style="font-family: Monocraft;">
  <div>
    <Navbar />

    <div class="flex flex-col space-y-5 place-items-center">
      {#each projects as { name, description, stack, emoji, url, github }}
        <div
          tabindex="-1"
          class="w-full md:w-11/12 lg:w-10/12 xl:w-1/2 collapse collapse-arrow bg-[#1D2123] rounded-none"
        >
          <div class="collapse-title">
            <div class="flex items-center space-x-2">
              <div class="text-4xl select-none">{emoji ?? ""}</div>
              <div>
                <span class="text-xl text-white">{name}</span><br /><span class="text-lg text-[#3F4549]"
                  >{description.slice(0, 45)}...</span
                >
              </div>
            </div>
          </div>
          <div class="collapse-content">
            <p>{description}</p>

            <div class="flex mt-6 text-[#22B8CF]">
              {stack.join(", ")}
            </div>

            <div class="w-full flex justify-end space-x-2 text-xl">
              {#if url}
                <a class="hover:text-[#ED4245] text-white duration-500" target="_blank" rel="noreferrer" href={url}
                  >[Project URL]</a
                >
              {/if}

              {#if github}
                <a class="hover:text-[#ED4245] text-white duration-500" target="_blank" rel="noreferrer" href={github}
                  >[GitHub]</a
                >
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <Footer />
</div>
