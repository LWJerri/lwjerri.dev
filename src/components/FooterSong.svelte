<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { NOT_PLAYING_ANYTHING } from "../helpers/constants";
  import { fmtText } from "../helpers/fmtText";
  import type { LynardWS } from "../interfaces";

  let socket: WebSocket;
  let spotify: LynardWS["d"]["spotify"];
  let lynardPingInverval: NodeJS.Timeout;

  function openLynardConnection() {
    socket.send(JSON.stringify({ op: 2, d: { subscribe_to_id: "432085389948485633" } }));
  }

  function listenLynardIncominMessages(event: MessageEvent<LynardWS>) {
    try {
      const { d }: LynardWS = JSON.parse(event.data.toString());

      spotify = d.spotify;
    } catch (err) {
      console.error(err);
    }
  }

  onMount(() => {
    socket = new WebSocket("wss://api.lanyard.rest/socket");

    socket.addEventListener("open", openLynardConnection);
    socket.addEventListener("message", listenLynardIncominMessages);

    lynardPingInverval = setInterval(() => socket.send(JSON.stringify({ op: 3 })), 1000 * 30);
  });

  onDestroy(() => {
    if (!socket || socket.readyState !== 1) return;

    socket.close();

    clearInterval(lynardPingInverval);

    socket.removeEventListener("open", openLynardConnection);
    socket.removeEventListener("message", listenLynardIncominMessages);
  });
</script>

{#if spotify}
  {@const trackUrl = `https://open.spotify.com/track/${spotify.track_id}`}
  {@const prepSong = fmtText(spotify.song)}
  {@const prepArtist = fmtText(spotify.artist)}

  <div class="avatar w-8">
    <img class="rounded-sm" src={spotify.album_art_url} alt="ALBUM_ART_IMAGE" />
  </div>

  <a href={trackUrl} target="_blank" class="overflow-hidden break-all text-ellipsis duration-500 hover:text-[#ED4245]"
    >{prepSong} [{prepArtist}]</a
  >
{:else}
  <span>{NOT_PLAYING_ANYTHING}</span>
{/if}
