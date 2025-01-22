import Encoding from "encoding-japanese";

export const randomChoice = <T>(array: readonly T[]) => {
  const randomElement = array[Math.floor(Math.random() * array.length)];

  if (randomElement == null) {
    throw new Error("randomChoice: array is empty");
  }

  return randomElement;
};

export const sjisEncode = (s: string) =>
  Encoding.urlEncode(Encoding.convert(Encoding.stringToCode(s), "SJIS"));
