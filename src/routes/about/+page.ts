import { aboutData } from "$lib/data/about";
import type { PageLoad } from "./$types";

export const load = (() => aboutData) satisfies PageLoad;
