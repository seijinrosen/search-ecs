import * as Encoding from "encoding-japanese";

export function randomChoice<T>(array: readonly T[]) {
  const randomElement = array[Math.floor(Math.random() * array.length)];

  if (randomElement == null) {
    throw new Error("randomChoice: array is empty");
  }

  return randomElement;
}

export function sjisEncode(s: string) {
  return Encoding.urlEncode(Encoding.convert(Encoding.stringToCode(s), "SJIS"));
}
