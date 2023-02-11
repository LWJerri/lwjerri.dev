<script lang="ts">
  import { Route, Router } from "svelte-navigator";
  import About from "./pages/About.svelte";
  import Main from "./pages/Main.svelte";
  import Projects from "./pages/Projects.svelte";
</script>

<Router>
  <main>
    <Route path="/about" component={About} primary={false} />
    <Route path="/projects" component={Projects} primary={false} />
    <Route component={Main} />
  </main>
</Router>
