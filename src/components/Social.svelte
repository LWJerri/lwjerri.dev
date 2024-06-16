<script lang="ts">
  import { load as aboutLoad } from "../routes/about/+page";

  const { socials } = aboutLoad();

  export let social: keyof typeof socials;
</script>

<!-- prettier-ignore -->
<a href={socials[social].url} target="_blank" class="box-decorator bg-[#ED4245] capitalize">
  <svelte:component this={socials[social].icon} /><span>{social}</span>
</a>
