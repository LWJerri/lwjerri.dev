<script lang="ts">
  import { onMount } from "svelte";
  import { Confetti } from "svelte-confetti";

  $: screenX = 1;

  onMount(() => {
    screenX = window.screen.width / 200;

    window.addEventListener("resize", () => {
      screenX = window.screen.width / 200;
    });
  });
</script>

<div class="pointer-events-none fixed -top-[50px] left-0 flex min-h-screen w-full justify-center overflow-hidden">
  <Confetti
    x={[-screenX, screenX]}
    y={[0, 0]}
    infinite
    duration={20000}
    amount={100}
    size={30}
    fallDistance="100vh"
    colorArray={["url(/birthday_pepe.webp)", "url(/birthday_krabsos.webp)"]} />
</div>
