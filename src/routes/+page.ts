import type { PageLoad } from "./$types";

export const prerender = "auto";

const oneYearToMs = 1000 * 60 * 60 * 24 * 365;
const kyivTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Kiev" });
const calculateDate = new Date(kyivTime).getTime() - new Date("2005-04-28").getTime();
const year = (calculateDate / oneYearToMs).toFixed(3);

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
