<script lang="ts">
  import IconAlertSquare from "./svg/IconAlertSquare.svelte";
  import IconReload from "./svg/IconReload.svelte";
  import IconX from "./svg/IconX.svelte";

  let isAlertVisible = true;
</script>

<div
  class="mx-auto flex w-full max-w-2xl justify-between rounded-md bg-[#5865F2] px-5 py-2 {isAlertVisible
    ? 'block'
    : 'hidden'}"
>
  <div class="flex items-center space-x-2">
    <span class="group rounded-md bg-black/10 p-1 transition duration-500 hover:-rotate-45">
      <IconAlertSquare className="duration-500 group-hover:rotate-45 group-hover:scale-110" />
    </span>

    <p class="break-words">Available update</p>
  </div>

  <div class="flex items-center space-x-2">
    <button
      class="group rounded-md bg-black/10 p-1 transition hover:bg-black/20"
      on:click={() => window.location.reload()}
    >
      <IconReload className="duration-500 group-hover:rotate-180" />
    </button>

    <button class="rounded-md bg-black/10 p-1 transition hover:bg-black/20" on:click={() => (isAlertVisible = false)}>
      <IconX />
    </button>
  </div>
</div>
