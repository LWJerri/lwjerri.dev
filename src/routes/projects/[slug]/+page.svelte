<script lang="ts">
  import { projects } from "../../../helpers/projects";
  import type { PageData } from "./$types";

  export let data: PageData;

  const projectsData = projects;
</script>

<p>{projectsData.find((x) => x.name.toLowerCase() === data.slug.toLowerCase())?.description}</p>
