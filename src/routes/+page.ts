import type { PageLoad } from "./$types";

export const prerender = true;

const oneYearToMs = 1000 * 60 * 60 * 24 * 365;
const calculateDate = new Date().getTime() - new Date("2005-04-28").getTime();
const year = Math.floor(calculateDate / oneYearToMs);

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
  return { year, emojis };
}) satisfies PageLoad;
