<script lang="ts">
  import { Confetti } from "svelte-confetti";
</script>

<div class="pointer-events-none fixed -top-[50px] left-0 flex min-h-screen w-full justify-center overflow-hidden">
  <Confetti
    x={[-50, 50]}
    y={[0, 0]}
    infinite
    duration={20000}
    amount={100}
    size={30}
    fallDistance="100vh"
    colorArray={["url(/pepe.webp)", "url(/krabsos.webp)"]}
  />
</div>
