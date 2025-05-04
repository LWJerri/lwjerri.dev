<script lang="ts">
  import { load as aboutLoad } from "../../routes/about/+page";

  const { socials } = aboutLoad();

  export let service: keyof typeof socials;
</script>

<a href={socials[service].url} target="_blank" class="capitalize hover:text-[#ED4245]">
  [{service}]
</a>
