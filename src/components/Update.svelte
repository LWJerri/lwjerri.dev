<script lang="ts">
  let isAlertVisible = true;
</script>

<div
  class="{isAlertVisible
    ? 'block'
    : 'hidden'} fixed bottom-0 flex w-full max-w-4xl flex-row items-center justify-between bg-[#5865F2] px-4 py-2 sm:mb-10 sm:w-4/5 sm:rounded-md"
>
  <div class="flex items-center space-x-2">
    <span class="group rounded-md bg-black/10 p-1 transition duration-500 hover:-rotate-45">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="duration-500 group-hover:rotate-45 group-hover:scale-110"
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
        <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path>
        <path d="M12 8v4"></path>
        <path d="M12 16h.01"></path>
      </svg>
    </span>

    <p class="break-words text-base">Update ready!</p>
  </div>

  <div class="flex items-center space-x-2">
    <button
      class="group rounded-md bg-black/10 p-1 transition hover:bg-black/20"
      on:click={() => window.location.reload()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="duration-500 group-hover:rotate-180"
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
        <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747"></path>
        <path d="M20 4v5h-5"></path>
      </svg>
    </button>

    <button class="rounded-md bg-black/10 p-1 transition hover:bg-black/20" on:click={() => (isAlertVisible = false)}>
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
        <path d="M18 6l-12 12"></path>
        <path d="M6 6l12 12"></path>
      </svg>
    </button>
  </div>
</div>
