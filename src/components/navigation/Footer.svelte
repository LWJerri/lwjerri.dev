<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/state";
  import { default as EarthIcon } from "@lucide/svelte/icons/earth";
  import type { WebsiteMetric } from "@umami/api-client";
  import { GEO_INFO, UMAMI_STATS_URL } from "../../helpers/constants";
  import FooterSong from "../ui/FooterSong.svelte";

  let views = $state(0);

  $effect(() => {
    if (!browser) return;

    async function getPageViews() {
      try {
        const request = await fetch("/api/views");

        const response: WebsiteMetric[] = await request.json();

        views = response.find(({ x }) => x === page.route.id)?.y ?? 0;
      } catch (err) {
        console.error(err);
      }
    }

    getPageViews();
  });
</script>

<footer class="pt-5 pb-2 text-lg select-none">
  <div class="grid w-full grid-cols-1 items-center gap-2 px-1 sm:px-5 md:grid-cols-3">
    <div class="flex items-center space-x-2 text-left">
      <EarthIcon />

      <a class="duration-300 hover:text-[#ED4245]" href={GEO_INFO.url} target="_blank">{GEO_INFO.name}</a>
    </div>

    <div class="flex items-center justify-start space-x-2 md:justify-center">
      <a class="duration-300 hover:text-[#ED4245]" href={UMAMI_STATS_URL} target="_blank">{views} views</a>
    </div>

    <div class="flex items-center justify-start space-x-2 md:justify-end">
      <svelte:boundary><FooterSong /></svelte:boundary>
    </div>
  </div>
</footer>
