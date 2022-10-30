import Encoding from "encoding-japanese";

export const randomChoice = <T>(array: T[]) =>
  array[Math.floor(Math.random() * array.length)];

export const sjisEncode = (s: string) =>
  Encoding.urlEncode(Encoding.convert(Encoding.stringToCode(s), "SJIS"));
