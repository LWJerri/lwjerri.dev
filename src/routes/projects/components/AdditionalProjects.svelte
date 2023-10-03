<script lang="ts">
  import type { AdditionalProject } from "../../../interfaces";

  export let projects: AdditionalProject[];
</script>

<div>
  <div class="my-5 flex flex-col space-y-5">
    {#each projects as project}
      <p>
        <a href={project.url} target="_blank" class="duration-500 hover:text-[#ED4245]">[{project.name}]</a> - {project.description}
      </p>
    {/each}
  </div>

  <p class="text-[#22B8CF]">
    These projects showcase my skills and experience in various areas of development and localization, and I am proud to
    have been able to contribute to their successful implementation.
  </p>
</div>
