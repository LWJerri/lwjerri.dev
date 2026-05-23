import { bornTime } from "$lib/data/bornTime";
import * as seo from "$lib/seo/pages";
import humanizeDuration from "humanize-duration";
import type { PageLoad } from "./$types";

export const load = (() => {
  const currentTime = new Date().getTime();

  return {
    ...seo.home,
    age: humanizeDuration(currentTime - bornTime, { units: ["y"], maxDecimalPoints: 0 }),
  };
}) satisfies PageLoad;
