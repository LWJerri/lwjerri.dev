<script lang="ts">
  $: isAlertVisible = true;
</script>

<div class="{isAlertVisible ? 'block' : 'hidden'} flex flex-row items-center justify-between bg-[#5865F2] px-4 py-2">
  <p class="break-words text-base">New version available</p>

  <div class="flex items-center space-x-2">
    <button class="rounded-md bg-black/10 p-1 transition hover:bg-black/20" on:click="{() => window.location.reload()}">
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#ffffff"
        ><path
          d="M11 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v7"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"></path><path
          d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011M21.666 16.667C21.049 15.097 19.636 14 17.99 14c-1.758 0-3.252 1.255-3.793 3"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"></path><path
          d="M19.995 16.772H21.4a.6.6 0 00.6-.6V14.55M14.334 19.333C14.953 20.903 16.366 22 18.01 22c1.758 0 3.252-1.255 3.793-3"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"></path><path
          d="M16.005 19.228H14.6a.6.6 0 00-.6.6v1.622"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"></path></svg
      >
    </button>

    <button class="rounded-md bg-black/10 p-1 transition hover:bg-black/20" on:click="{() => (isAlertVisible = false)}">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-x"
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
        <path d="M18 6l-12 12"></path>
        <path d="M6 6l12 12"></path>
      </svg>
    </button>
  </div>
</div>
