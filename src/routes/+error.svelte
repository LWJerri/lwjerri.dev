<script lang="ts">
  import SvelteSeo from "svelte-seo";
  import Fallback from "../components/Fallback.svelte";

  const PAGE_TITLE = "Andrii Zontov - Backstage?...";
  const PAGE_DESCRIPTION = "Sorry, but the page you are looking for is not found.";
</script>

<SvelteSeo
  title={PAGE_TITLE}
  description={PAGE_DESCRIPTION}
  openGraph={{ title: PAGE_TITLE, description: PAGE_DESCRIPTION }}
  nofollow={true}
  noindex={true}
  nositelinkssearchbox={true} />

<Fallback title="Umm..." details="Requested page not found" />
