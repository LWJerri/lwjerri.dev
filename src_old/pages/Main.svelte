<script lang="ts">
  import { onMount } from "svelte";

  import emojisList from "../helpers/emojis.json";
  import { webVitals } from "../helpers/vitals";

  const {
    location: { pathname: path },
  } = window;

  onMount(async () => {
    webVitals({ path });
  });
</script>
