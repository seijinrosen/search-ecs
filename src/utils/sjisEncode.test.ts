import { describe, expect, it } from "vitest";

import { sjisEncode } from "./sjisEncode";

describe("sjisEncode", () => {
  it("should encode a simple string to SJIS", () => {
    const input = "hello";
    const expected = "hello"; // URL encoded SJIS representation of 'hello'
    expect(sjisEncode(input)).toBe(expected);
  });

  it("should encode a string with special characters to SJIS", () => {
    const input = "こんにちは";
    const expected = "%82%B1%82%F1%82%C9%82%BF%82%CD"; // URL encoded SJIS representation of 'こんにちは'
    expect(sjisEncode(input)).toBe(expected);
  });

  it("should encode an empty string to SJIS", () => {
    const input = "";
    const expected = ""; // URL encoded SJIS representation of an empty string
    expect(sjisEncode(input)).toBe(expected);
  });

  it("should encode a string with spaces to SJIS", () => {
    const input = "hello world";
    const expected = "hello%20world"; // URL encoded SJIS representation of 'hello world'
    expect(sjisEncode(input)).toBe(expected);
  });

  it("should encode a string with numbers to SJIS", () => {
    const input = "12345";
    const expected = "12345"; // URL encoded SJIS representation of '12345'
    expect(sjisEncode(input)).toBe(expected);
  });
});
