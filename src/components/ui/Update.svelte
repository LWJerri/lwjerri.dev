<script lang="ts">
  import { default as AlertCircleIcon } from "@lucide/svelte/icons/circle-alert";
  import { default as RefreshCcwIcon } from "@lucide/svelte/icons/refresh-ccw";
  import { default as XIcon } from "@lucide/svelte/icons/x";
  import { cn } from "../../helpers/cn";

  let isAlertVisible = true;
</script>

<div
  class={cn(
    "flex w-full max-w-2xl items-center justify-between rounded-md bg-[#5862F2] px-5 py-2",
    isAlertVisible ? "inline-flex" : "hidden",
  )}
>
  <div class="flex items-center space-x-2">
    <span class="rounded-md bg-black/10 p-1">
      <AlertCircleIcon />
    </span>

    <p class="break-words">New changes available</p>
  </div>

  <div class="flex items-center space-x-2">
    <button
      class="group rounded-md bg-black/10 p-1 transition hover:bg-black/20"
      onclick={() => window.location.reload()}
    >
      <RefreshCcwIcon class="duration-300 group-hover:-rotate-180" />
    </button>

    <button class="rounded-md bg-black/10 p-1 transition hover:bg-black/20" onclick={() => (isAlertVisible = false)}>
      <XIcon />
    </button>
  </div>
</div>
