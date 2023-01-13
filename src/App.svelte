<script lang="ts">
  import { Route, Router } from "svelte-navigator";
  import Main from "./pages/Main.svelte";
  import Projects from "./pages/Projects.svelte";
  import About from "./pages/About.svelte";
</script>

<Router>
  <main>
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route component={Main} />
  </main>
</Router>
