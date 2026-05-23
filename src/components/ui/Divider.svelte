<script lang="ts">
  let { text }: { text: string } = $props();
</script>

<div class="my-5 flex items-center">
  <span class="h-px flex-1 bg-white"></span>
  <p class="shrink-0 px-6">{text}</p>
  <span class="h-px flex-1 bg-white"></span>
</div>
