import type { PageLoad } from "./$types";

const oneYearToMs = 1000 * 60 * 60 * 24 * 365;
const calculateTime = new Date().getTime() - new Date("2005-04-28").getTime();
const year = Math.floor(calculateTime / oneYearToMs);

const emojis = [
  "(＾3＾♪",
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
