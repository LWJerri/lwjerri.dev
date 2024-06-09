import type { Project } from "../../interfaces";
import type { PageLoad } from "./$types";

const projects: Project[] = [];

export const load = (() => {
  return { projects };
}) satisfies PageLoad;
