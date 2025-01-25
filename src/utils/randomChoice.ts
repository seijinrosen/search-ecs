export function randomChoice<T>(array: readonly T[]) {
  const randomElement = array[Math.floor(Math.random() * array.length)];

  if (randomElement == null) {
    throw new Error("randomChoice: array is empty");
  }

  return randomElement;
}
