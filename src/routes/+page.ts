import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import type { PageLoad } from "./$types";

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault("Europe/Kyiv");

export const prerender = true;

const today = dayjs();
const birthdateObj = dayjs(new Date("2005-04-28").getTime()).utc().tz();
const myAge = today.diff(birthdateObj, "year", true);
// https://stackoverflow.com/a/48100007

const emojis = [
  "(@_@)",
  "(・o・)",
  ":0",
  "O_o",
  "(*_*)",
  ">.<",
  "=_=",
  ":-P",
  ":-!",
  ":-$",
  "}:‑)",
  "(^^)",
  "^_^",
  ":-)",
];

export const load = (() => {
  return { myAge, emojis };
}) satisfies PageLoad;
