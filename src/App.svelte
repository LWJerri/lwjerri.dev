<script lang="ts">
  import { Route, Router } from "svelte-navigator";
  import Main from "./pages/Main.svelte";
  import Projects from "./pages/Projects.svelte";
  import About from "./pages/About.svelte";

  import { webVitals } from "./helpers/vitals";

  const analyticsId = process.env.env.VERCEL_ANALYTICS_ID;

  console.log(analyticsId);

  webVitals({
    path: window.location.pathname,
    analyticsId,
  });
</script>

<Router>
  <main>
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route component={Main} />
  </main>
</Router>
