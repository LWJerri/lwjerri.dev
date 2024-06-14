<script lang="ts">
  import { location, statsURL } from "../../helpers/constants";
  import FooterSong from "../FooterSong.svelte";
  import IconPlanet from "../svg/IconPlanet.svelte";

  export let views: number | string;
</script>

<footer class="select-none pb-2 pt-5 text-lg">
  <div class="grid w-full grid-cols-1 items-center gap-3 px-1 sm:px-5 md:grid-cols-3">
    <div class="flex items-center space-x-2 text-left">
      <div>
        <IconPlanet />
      </div>

      <a class="duration-500 hover:text-[#ED4245]" href={location.url} target="_blank">{location.name}</a>
    </div>

    <div class="flex items-center justify-start space-x-2 md:justify-center">
      <a class="duration-500 hover:text-[#ED4245]" href={statsURL} target="_blank">{views} views</a>
    </div>

    <div class="flex items-center justify-start space-x-2 md:justify-end">
      <FooterSong />
    </div>
  </div>
</footer>
