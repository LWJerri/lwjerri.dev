<script lang="ts">
  import { IconCompass, IconEye, IconPlaylist } from "@tabler/icons-svelte";
  import { onMount } from "svelte";
  import type { LynardAPI } from "../../interfaces";

  export let pageView: number;

  const NOT_PLAYING_ANYTHING = "Not playing anything.";

  let lynardResponse: LynardAPI;
  let spotifySong: string;
  let isSongPlaying = false;

  const city = { name: "Ukraine", url: "https://www.google.com/maps/place/Ukraine" };
  const umamiStatsURL = "https://umami.lwjerri.dev/share/jV8DPlSgY0nXu0GL/lwjerri.dev";

  const fmtText = (text: string) => {
    const short = text.slice(0, 10).trimEnd() + "*";

    return text.length > 10 ? short : text;
  };

  async function getLynardStats() {
    try {
      const request = await fetch("https://api.lanyard.rest/v1/users/432085389948485633");
      lynardResponse = await request.json();
    } catch {}

    if (!lynardResponse.data.spotify || !lynardResponse?.success) {
      spotifySong = NOT_PLAYING_ANYTHING;
      isSongPlaying = false;

      return;
    }

    isSongPlaying = true;

    const { song, artist, track_id } = lynardResponse.data.spotify;

    const spotifySongURL = `https://open.spotify.com/track/${track_id}`;

    const tagBuilder = document.createElement("a");

    tagBuilder.classList.add("overflow-hidden", "text-ellipsis", "break-all", "duration-500", "hover:text-[#ED4245]");
    tagBuilder.href = spotifySongURL;
    tagBuilder.target = "_blank";
    tagBuilder.textContent = `${fmtText(song)} [${fmtText(artist)}]`;

    spotifySong = tagBuilder.outerHTML;
  }

  onMount(async () => {
    await getLynardStats();

    setInterval(async () => await getLynardStats(), 1000 * 10);
  });
</script>

<!-- svelte-ignore a11y-no-redundant-roles -->
<footer class="select-none py-2" role="contentinfo">
  <div class="grid w-full grid-cols-1 items-center gap-3 px-1 sm:px-5 md:grid-cols-3">
    <div class="flex items-center space-x-2 text-left">
      <div>
        <IconCompass size={24} stroke={1.5} />
      </div>

      <a class="duration-500 hover:text-[#ED4245]" href={city.url} target="_blank">{city.name}</a>
    </div>

    <div class="flex items-center justify-start space-x-2 md:justify-center">
      <div>
        <IconEye size={24} stroke={1.5} />
      </div>

      <a class="duration-500 hover:text-[#ED4245]" href={umamiStatsURL} target="_blank">{pageView ?? 0} views</a>
    </div>

    <div class="flex items-center justify-start space-x-2 md:justify-end">
      {#if isSongPlaying}
        <div class="avatar w-8">
          <img class="rounded" src={lynardResponse.data.spotify?.album_art_url} alt="TRACK_IMAGE" />
        </div>
      {:else}
        <div>
          <IconPlaylist size={24} stroke={1.5} />
        </div>
      {/if}

      <span>{@html spotifySong ?? NOT_PLAYING_ANYTHING}</span>
    </div>
  </div>
</footer>
