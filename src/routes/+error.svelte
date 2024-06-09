<script lang="ts">
  import SvelteSeo from "svelte-seo";
  import Fallback from "../components/Fallback.svelte";

  const PAGE_TITLE = "Andrii Zontov - Backstage?...";
</script>

<SvelteSeo title={PAGE_TITLE} openGraph={{ title: PAGE_TITLE, site_name: PAGE_TITLE }} />

<Fallback title="Umm..." details="Requested page not found" />
