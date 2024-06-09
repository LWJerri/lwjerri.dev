import humanizeDuration from "humanize-duration";
import type { PageLoad } from "./$types";

const bornTime = new Date("2005-04-28").getTime();
const actualTime = new Date().getTime();

const age = humanizeDuration(actualTime - bornTime, { units: ["y"], round: true });

export const load = (() => {
  return { age };
}) satisfies PageLoad;
