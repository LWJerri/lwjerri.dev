<script lang="ts">
  import { onMount } from "svelte";

  interface LynardAPI {
    data: { listening_to_spotify: boolean; spotify: { song: string; artist: string; track_id: string } };
  }

  $: songInfo = "Loading...";
  $: pageViews = 0;
  $: screenSize = window.innerWidth;
  $: getDataRequest = { data: { listening_to_spotify: false } } as LynardAPI;

  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  async function getDiscordInfo() {
    displayWindowSize();

    try {
      const lynardAPI = await fetch("https://api.lanyard.rest/v1/users/432085389948485633");
      getDataRequest = await lynardAPI.json();
    } catch {}

    const {
      data: { listening_to_spotify: isPlaying, spotify },
    } = getDataRequest;

    if (!isPlaying) {
      songInfo = "Not playing anything.";
    } else {
      const { song, artist, track_id: songId } = spotify;

      const songText = (string: string) => {
        return screenSize < 1024 && string.length > 15 ? string.slice(0, 15).trimEnd() + "..." : string;
      };

      songInfo = `<a href="https://open.spotify.com/track/${songId}" target="_blank">${songText(song)} [${songText(
        artist,
      )}]</a>`;
    }
  }

  function displayWindowSize() {
    screenSize = window.innerWidth;
  }

  async function viewerCounter() {
    let numRange = 1;

    try {
      const getVisitorData = await fetch("https://cloudflare.com/cdn-cgi/trace");
      const response = await getVisitorData.text();

      const [visitorIpMatch] = response?.match(/ip=.*\d/);
      const visitorIp = visitorIpMatch?.slice(3)?.split(".");

      if (!visitorIp) return;

      for (let i = 0; i < visitorIp.length; i++) {
        numRange = numRange + parseInt(visitorIp[i]);
      }
    } catch {}

    try {
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
    } catch {}
  }

  onMount(async () => {
    await getDiscordInfo();
    setInterval(async () => await getDiscordInfo(), 1000 * 10);

    await viewerCounter();
  });
</script>

<div class="w-full">
  <div class="flex justify-between mx-5 pb-1 mt-5">
    <a
      class="hover:text-[#ED4245] text-white duration-500"
      href="https://www.google.com/maps/place/Kyiv"
      target="_blank"
      rel="noreferrer">Ukraine, Kyiv</a
    >

    <div class="flex items-center space-x-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 6H16V8H8V6ZM4 10V8H8V10H4ZM2 12V10H4V12H2ZM2 14V12H0V14H2ZM4 16H2V14H4V16ZM8 18H4V16H8V18ZM16 18V20H8V18H16ZM20 16V18H16V16H20ZM22 14V16H20V14H22ZM22 12H24V14H22V12ZM20 10H22V12H20V10ZM20 10V8H16V10H20ZM10 11H14V15H10V11Z"
          fill="#D9D9D9"
        />
      </svg>
      <p class="text-white">{pageViews} views</p>
    </div>

    {#if screenSize >= 594}
      <p class="flex items-center space-x-2 text-white">
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
