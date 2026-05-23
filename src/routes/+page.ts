import { bornTime } from "$lib/data/home";
import humanizeDuration from "humanize-duration";
import type { PageLoad } from "./$types";

export const load = (() => {
  const currentTime = new Date().getTime();

  return {
    age: humanizeDuration(currentTime - bornTime, { units: ["y"], maxDecimalPoints: 0 }),
  };
}) satisfies PageLoad;
