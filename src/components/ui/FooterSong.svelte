<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { fmtText } from "../../helpers/fmtText";
  import type { LynardWS } from "../../interfaces";

  let socket: WebSocket | null = null;
  let spotify: LynardWS["d"]["spotify"] | null = null;
  let pingInterval: NodeJS.Timeout | null = null;
  let reconnectAttempts = 0;

  function initializeWebSocket() {
    socket = new WebSocket("wss://api.lanyard.rest/socket");

    socket.addEventListener("open", handleOpen);
    socket.addEventListener("message", handleMessage);
    socket.addEventListener("error", handleError);
    socket.addEventListener("close", handleClose);
  }

  function handleOpen() {
    if (!socket) return;

    socket.send(JSON.stringify({ op: 2, d: { subscribe_to_id: "432085389948485633" } }));
    reconnectAttempts = 0;
  }

  function handleMessage(event: MessageEvent) {
    try {
      const { d }: LynardWS = JSON.parse(event.data);

      spotify = d.spotify || null;
    } catch (err) {
      console.error(err);
    }
  }

  function handleError(event: Event) {
    console.error(event);
  }

  function handleClose() {
    cleanup();

    if (reconnectAttempts < 5) {
      setTimeout(() => {
        reconnectAttempts++;

        initializeWebSocket();
      }, 1000 * 5);
    }
  }

  function cleanup() {
    if (socket) {
      socket.removeEventListener("open", handleOpen);
      socket.removeEventListener("message", handleMessage);
      socket.removeEventListener("error", handleError);
      socket.removeEventListener("close", handleClose);
      socket.close();
      socket = null;
    }

    if (pingInterval) {
      clearInterval(pingInterval);

      pingInterval = null;
    }
  }

  onMount(() => {
    initializeWebSocket();

    pingInterval = setInterval(() => {
      if (socket?.readyState !== WebSocket.OPEN) return;

      socket.send(JSON.stringify({ op: 3 }));
    }, 1000 * 30);

    return cleanup;
  });

  onDestroy(cleanup);
</script>

<div class="flex items-center gap-2">
  {#if spotify}
    <div class="avatar w-8">
      <img class="rounded-sm" src={spotify.album_art_url} alt={`${spotify.album} album art`} loading="lazy" />
    </div>

    <a
      href="https://open.spotify.com/track/{spotify.track_id}"
      target="_blank"
      rel="noopener noreferrer"
      class="truncate text-ellipsis transition-colors duration-300 hover:text-[#ED4245]"
      title="{fmtText(spotify.song)} by {fmtText(spotify.artist)}"
    >
      {fmtText(spotify.song)} [{fmtText(spotify.artist)}]
    </a>
  {:else}
    <span>Not playing anything.</span>
  {/if}
</div>

<style>
  .truncate {
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
