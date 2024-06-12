<script lang="ts">
  import { onMount } from "svelte";
  import { NOT_PLAYING_ANYTHING } from "../helpers/constants";
  import { fmtText } from "../helpers/fmtText";
  import type { LynardWS } from "../interfaces";

  let spotify: LynardWS["d"]["spotify"];

  onMount(() => {
    const socket = new WebSocket("wss://api.lanyard.rest/socket");

    socket.addEventListener("open", () => {
      socket.send(JSON.stringify({ op: 2, d: { subscribe_to_id: "432085389948485633" } }));
    });

    socket.addEventListener("message", (event) => {
      try {
        const { d }: LynardWS = JSON.parse(event.data.toString("utf-8"));

        spotify = d.spotify;
      } catch (err) {
        console.error(err);
      }
    });

    setInterval(() => socket.send(JSON.stringify({ op: 3 })), 1000 * 30);
  });
</script>

{#if spotify}
  {@const trackUrl = `https://open.spotify.com/track/${spotify.track_id}`}
  {@const prepSong = fmtText(spotify.song)}
  {@const prepArtist = fmtText(spotify.artist)}

  <div class="avatar w-8">
    <img class="rounded" src={spotify.album_art_url} alt="ALBUM_ART_IMAGE" />
  </div>

  <a href={trackUrl} target="_blank" class="overflow-hidden text-ellipsis break-all duration-500 hover:text-[#ED4245]"
    >{prepSong} [{prepArtist}]</a>
{:else}
  <span>{NOT_PLAYING_ANYTHING}</span>
{/if}
