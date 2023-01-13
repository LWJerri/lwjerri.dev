import App from "./App.svelte";
import "./index.css";
import { inject } from "@vercel/analytics";

inject();

const app = new App({
  target: document.getElementById("app"),
});

export default app;
