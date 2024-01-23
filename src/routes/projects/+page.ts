import { projects } from "../../helpers/projects";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load = (() => {
  return { projects };
}) satisfies PageLoad;
