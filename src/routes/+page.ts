import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import type { PageLoad } from "./$types";

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault("Europe/Kiev");

export const prerender = "auto";

const today = dayjs();
const birthdateObj = dayjs(new Date("2005-04-28").getTime()).utc().tz();
const myAge = Math.trunc(today.diff(birthdateObj, "year", true) * Math.pow(10, 3)) / Math.pow(10, 3);
// Code from `myAge` constant: https://stackoverflow.com/a/48100007

const emojis = [
  "(゜o゜;",
  "(@_@)",
  "(・o・)",
  ":0",
  "=-O",
  ":-O",
  "O_o",
  "(*_*)",
  "(+_+)",
  ">.<",
  "=_=",
  ":-/",
  ":-|",
  ":‑X",
  ":-*",
  ":-P",
  ":-!",
  ":-$",
  ";-)",
  ";)",
  "}:‑)",
  ":-D",
  "o:-)",
  "B-)",
  "8-)",
  ":,-)",
  "(^^)",
  "^_^",
  ":^)",
  ":-)",
];

export const load = (() => {
  return { myAge, emojis };
}) satisfies PageLoad;
