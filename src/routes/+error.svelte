<script lang="ts">
  import { Seo } from "@svelte-bin/seo";
  import Fallback from "../components/ui/Fallback.svelte";

  const PAGE_TITLE = "Andrii Zontov - Backstage?...";
  const PAGE_DESCRIPTION = "Sorry, but the page you are looking for is not found.";
</script>

<Seo
  title={PAGE_TITLE}
  description={PAGE_DESCRIPTION}
  openGraph={{ title: PAGE_TITLE, description: PAGE_DESCRIPTION }}
  nofollow={true}
  noindex={true}
  nositelinkssearchbox={true}
/>

<Fallback title="Umm..." message="Requested page not found" />
