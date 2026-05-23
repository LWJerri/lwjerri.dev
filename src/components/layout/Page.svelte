<script lang="ts">
  import type { Snippet } from "svelte";
  import { cn } from "../../helpers/cn";

  let {
    centered = false,
    class: className,
    children,
  }: {
    centered?: boolean;
    class?: string;
    children: Snippet;
  } = $props();
</script>

<div
  class={cn(
    "mx-auto flex w-full max-w-4xl flex-1 flex-col px-1 sm:px-5",
    centered && "items-center justify-center",
    className,
  )}
>
  {@render children()}
</div>
