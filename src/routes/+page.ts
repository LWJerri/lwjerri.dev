import humanizeDuration from "humanize-duration";
import type { PageLoad } from "./$types";

const bornTime = new Date("2005-04-28").getTime();

export const load = (() => {
  const currentTime = new Date().getTime();

  return {
    age: humanizeDuration(currentTime - bornTime, { units: ["y"], maxDecimalPoints: 0 }),
  };
}) satisfies PageLoad;
