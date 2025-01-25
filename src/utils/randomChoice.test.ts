import { expect, test } from "vitest";

import { randomChoice } from "./randomChoice";

test("空の配列ならエラー", () => {
  expect(() => randomChoice([])).toThrowError("randomChoice: array is empty");
});

test("配列からランダムな要素を選択する", () => {
  const array = [1, 2, 3, 4, 5];
  const result = randomChoice(array);
  expect(array).toContain(result);
});

test("配列の単一要素を選択する", () => {
  const array = [42];
  const result = randomChoice(array);
  expect(result).toBe(42);
});

test("配列の文字列要素を選択する", () => {
  const array = ["apple", "banana", "cherry"];
  const result = randomChoice(array);
  expect(array).toContain(result);
});
