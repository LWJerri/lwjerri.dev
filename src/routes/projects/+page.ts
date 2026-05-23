import { projects } from "$lib/data/projects";
import * as seo from "$lib/seo/pages";
import type { PageLoad } from "./$types";

export const load = (() => ({ projects, ...seo.projects })) satisfies PageLoad;
