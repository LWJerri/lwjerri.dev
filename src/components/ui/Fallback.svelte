<script lang="ts">
  export let title: string;
  export let message: string;
</script>

<div class="grid place-content-center px-4">
  <div class="px-1 text-center sm:px-5">
    <div class="flex justify-center">
      <h1 class="text-5xl font-bold text-[#ED4245]">{title}</h1>
    </div>

    <p class="mt-4 text-2xl">{message}</p>
  </div>
</div>
