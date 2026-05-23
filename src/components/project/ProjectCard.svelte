<script lang="ts">
  import { copyAnchorShareUrl } from "$lib/navigation/scrollToHash";
  import type { Project } from "../../interfaces";

  let { project }: { project: Project } = $props();

  let copied = $state(false);

  async function handleShare(event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) {
    event.preventDefault();

    await copyAnchorShareUrl(project.name);

    copied = true;

    setTimeout(() => {
      copied = false;
    }, 2000);
  }
</script>

<div class="cursor-default rounded-md bg-[#2A2929] p-4" id={project.name}>
  <div class="space-y-5">
    <div class="flex items-center justify-between">
      <h1 class="text-lg font-bold">{project.name}</h1>

      {#if project.isClosed}
        <p class="box-decorator bg-[#ED4245]">Closed</p>
      {/if}
    </div>

    <p>{project.description || "Description will be added soon..."}</p>

    <div class="flex flex-wrap gap-2">
      {#each project.stack as technology}
        <div class="box-decorator bg-[#5862F2]">{technology}</div>
      {/each}
    </div>

    <div class="pointer-events-auto flex items-center justify-end gap-2">
      {#if project.urls}
        {#each project.urls as url, i}
          {@const title = `[URL #${i + 1}]`}

          <a class="duration-300 hover:text-[#ED4245]" target="_blank" rel="noreferrer" href={url}>{title}</a>
        {/each}
      {/if}

      {#if project.github}
        <a class="duration-300 hover:text-[#ED4245]" target="_blank" rel="noreferrer" href={project.github}>[GitHub]</a>
      {/if}

      <a
        class="outline-hidden duration-300 hover:text-[#ED4245]"
        target="_self"
        rel="noreferrer"
        href="#{project.name}"
        onclick={handleShare}>{copied ? "[Copied]" : "[Share]"}</a
      >
    </div>
  </div>
</div>
