<script lang="ts">
  import { onMount } from "svelte";
  import type { LynardAPI } from "../../interfaces";

  export let pageView: number;

  let lynardResponse: LynardAPI;
  let spotifySong: HTMLAnchorElement;

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

    if (!lynardResponse?.success || !lynardResponse.data.listening_to_spotify) return;

    const { song, artist, track_id } = lynardResponse.data.spotify;
    const spotifySongURL = `https://open.spotify.com/track/${track_id}`;

    spotifySong = document.createElement("a");

    spotifySong.classList.add("overflow-hidden", "text-ellipsis", "break-all", "duration-500", "hover:text-[#ED4245]");
    spotifySong.href = spotifySongURL;
    spotifySong.target = "_blank";
    spotifySong.textContent = `${fmtText(song)} [${fmtText(artist)}]`;
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
          class="icon icon-tabler icon-tabler-compass"
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
          class="icon icon-tabler icon-tabler-eye-check"
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
          <path
            d="M11.143 17.961c-3.221 -.295 -5.936 -2.281 -8.143 -5.961c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-.222 .37 -.449 .722 -.68 1.057"
          ></path>
          <path d="M15 19l2 2l4 -4"></path>
        </svg>
      </div>

      <a class="duration-500 hover:text-[#ED4245]" href={umamiStatsURL} target="_blank">{pageView ?? 0} views</a>
    </div>

    <div class="flex items-center justify-start space-x-2 md:justify-end">
      <div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.4356 5.77441C21.9293 9.49441 21.9365 14.4035 19.4356 18.1317"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16.9889 8.21729C18.2707 10.54 18.2707 13.3746 16.9889 15.6891"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.68228 11.953C2.67955 13.1993 2.68228 14.6611 3.71137 15.5348C4.74137 16.4093 5.55773 16.0484 6.88955 16.4866C8.22228 16.9257 10.0886 19.633 12.1505 18.4102C13.265 17.6184 13.7905 16.1239 13.7905 11.953C13.7905 7.78204 13.2886 6.30386 12.1505 5.49568C10.0886 4.27386 8.22228 6.98113 6.88955 7.41932C5.55773 7.85841 4.74137 7.4975 3.71137 8.37113C2.68228 9.24477 2.67955 10.7066 2.68228 11.953Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>

      <span>{@html spotifySong?.outerHTML ?? "Not playing anything."}</span>
    </div>
  </div>
</footer>
