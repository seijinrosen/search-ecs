import * as Encoding from "encoding-japanese";

export function sjisEncode(s: string) {
  return Encoding.urlEncode(Encoding.convert(Encoding.stringToCode(s), "SJIS"));
}
