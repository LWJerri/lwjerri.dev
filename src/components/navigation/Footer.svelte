<script lang="ts">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M8 16l2 -6l6 -2l-2 6l-6 2"></path>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          <path d="M12 3l0 2"></path>
          <path d="M12 19l0 2"></path>
          <path d="M3 12l2 0"></path>
          <path d="M19 12l2 0"></path>
        </svg>
      </div>

      <a class="duration-500 hover:text-[#ED4245]" href={city.url} target="_blank">{city.name}</a>
    </div>

    <div class="flex items-center justify-start space-x-2 md:justify-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
          <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
        </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M17 17v-13h4"></path>
            <path d="M13 5h-10"></path>
            <path d="M3 9l10 0"></path>
            <path d="M9 13h-6"></path>
          </svg>
        </div>
      {/if}

      <span>{@html spotifySong ?? NOT_PLAYING_ANYTHING}</span>
    </div>
  </div>
</footer>
