import { aboutData } from "$lib/data/about";
import * as seo from "$lib/seo/pages";
import type { PageLoad } from "./$types";

export const load = (() => ({ ...aboutData, ...seo.about })) satisfies PageLoad;
