<script lang="ts">
  import { onMount } from "svelte";

  let songInfo = "Loading...";
  let pageViews = 0;
  let screenSize = window.innerWidth;

  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  async function getDiscordInfo() {
    const getDataRequest = await fetch("https://api.lanyard.rest/v1/users/432085389948485633");

    const {
      data: { listening_to_spotify: isPlaying, spotify },
    } = await getDataRequest.json();

    if (!isPlaying) {
      songInfo = "Not playing anything.";
    } else {
      const { song, artist, track_id: songId } = spotify;

      const songName = song.length > 15 ? song.slice(0, 15).trimEnd() + "..." : song;
      const songArtist = artist.length > 10 ? artist.slice(0, 10).trimEnd() + "..." : artist;

      songInfo = `<a href="https://open.spotify.com/track/${songId}" target="_blank">${songName} [${songArtist}]</a>`;
    }
  }

  function displayWindowSize() {
    screenSize = window.innerWidth;
  }

  async function viewerCounter() {
    const getVisitorData = await fetch("https://cloudflare.com/cdn-cgi/trace");
    const response = await getVisitorData.text();

    let numRange = 0;

    const [visitorIpMatch] = response?.match(/ip=.*\d/);
    const visitorIp = visitorIpMatch?.slice(3)?.split(".");

    if (!visitorIp) return;

    for (let i = 0; i < visitorIp.length; i++) {
      numRange = numRange + parseInt(visitorIp[i]);
    }

    const counterRequest = await fetch("https://api.lwjerri.dev/counter", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ numRange, path: window.location.pathname }),
    });

    const { views } = await counterRequest.json();

    pageViews = views;
  }

  onMount(async () => {
    await getDiscordInfo();
    setInterval(async () => await getDiscordInfo(), 1000 * 10);

    await viewerCounter();
  });
</script>

<div class="w-full">
  <div class="flex justify-between mx-5 pb-1 mt-5">
    <p>Ukraine, Kyiv</p>
    <p>{pageViews} views</p>

    {#if screenSize >= 580}
      <p class="flex items-center space-x-2">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_9_216)">
            <path
              d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.55 0 10 0ZM14.6008 14.45C14.4008 14.7492 14.0508 14.85 13.75 14.65C11.4 13.2 8.45 12.8992 4.94917 13.6992C4.60083 13.8008 4.3 13.55 4.2 13.25C4.1 12.8992 4.35 12.6 4.65 12.5C8.45 11.6492 11.75 12 14.35 13.6C14.7 13.75 14.7492 14.1492 14.6008 14.45ZM15.8008 11.7C15.55 12.05 15.1 12.2 14.7492 11.95C12.05 10.3 7.95 9.8 4.8 10.8C4.40083 10.9 3.95 10.7 3.85 10.3C3.75 9.9 3.95 9.44917 4.35 9.34917C8 8.25 12.5 8.80083 15.6 10.7C15.9008 10.8508 16.05 11.35 15.8008 11.7ZM15.9008 8.9C12.7 7 7.35 6.8 4.3 7.75083C3.8 7.9 3.3 7.6 3.15 7.15C3 6.64917 3.3 6.15 3.75 5.99917C7.3 4.94917 13.15 5.14917 16.8508 7.35C17.3 7.6 17.45 8.2 17.2 8.65C16.9508 9.00083 16.35 9.14917 15.9008 8.9Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_9_216">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span class="break-all hover:text-[#ED4245] duration-500">{@html songInfo}</span>
      </p>
    {/if}
  </div>
</div>
