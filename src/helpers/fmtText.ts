export const fmtText = (text: string) => {
  const short = text.slice(0, 10).trimEnd() + "*";

  return text.length > 10 ? short : text;
};
