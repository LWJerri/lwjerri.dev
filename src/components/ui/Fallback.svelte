<script lang="ts">
  let { title, message }: { title: string; message: string } = $props();
</script>

<div class="text-center">
  <h1 class="text-5xl font-bold text-[#ED4245]">{title}</h1>

  <p class="mt-5 text-2xl">{message}</p>
</div>
