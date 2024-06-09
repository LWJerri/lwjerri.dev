<script lang="ts">
  import { onMount } from "svelte";
  import { NOT_PLAYING_ANYTHING, location, statsURL } from "../../helpers/constants";
  import { fmtText } from "../../helpers/fmtText";
  import type { LynardWS } from "../../interfaces";
  import IconPlanet from "../svg/IconPlanet.svelte";
  import IconPlaylist from "../svg/IconPlaylist.svelte";

  export let views: number | string;

  let songArtUrl: string | null;
  let playingSong = NOT_PLAYING_ANYTHING;

  onMount(() => {
    const socket = new WebSocket("wss://api.lanyard.rest/socket");

    socket.addEventListener("open", () =>
      socket.send(JSON.stringify({ op: 2, d: { subscribe_to_id: "432085389948485633" } })),
    );

    socket.addEventListener("message", (event) => {
      const parsedEvent: LynardWS = JSON.parse(event.data.toString("utf-8"));

      const { d } = parsedEvent;

      if (!d.spotify) {
        playingSong = NOT_PLAYING_ANYTHING;
        songArtUrl = null;

        return;
      }

      const { song, artist, track_id, album_art_url } = d.spotify;

      const spotifySongURL = `https://open.spotify.com/track/${track_id}`;

      const tagBuilder = document.createElement("a");

      tagBuilder.classList.add("overflow-hidden", "text-ellipsis", "break-all", "duration-500", "hover:text-[#ED4245]");
      tagBuilder.href = spotifySongURL;
      tagBuilder.target = "_blank";
      tagBuilder.textContent = `${fmtText(song)} [${fmtText(artist)}]`;

      playingSong = tagBuilder.outerHTML;
      songArtUrl = album_art_url;
    });

    setInterval(() => socket.send(JSON.stringify({ op: 3 })), 1000 * 30);
  });
</script>

<footer class="select-none py-2 text-lg">
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
      {#if songArtUrl}
        <div class="avatar w-8">
          <img class="rounded" src={songArtUrl} alt="TRACK_IMAGE" />
        </div>
      {:else}
        <div>
          <IconPlaylist />
        </div>
      {/if}

      <span>{@html playingSong}</span>
    </div>
  </div>
</footer>
