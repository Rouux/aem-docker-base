export function isNil(arg: unknown): boolean {
  return arg === undefined || arg === null;
}

export function replaceAt(
  text: string,
  index: number,
  replacement = ''
): string {
  if (isNil(text) || isNaN(index) || index < 0 || index > text.length)
    return text;
  return (
    text.substr(0, index) +
    replacement +
    text.substr(index + replacement.length)
  );
}

export function arrayOfNumbers(length: number, randomize = true): number[] {
  const result: number[] = [];
  for (let index = 0; index < length; index++) {
    result.push(index);
  }
  if (randomize) shuffleArray(result);
  return result;
}

export function shuffleArray<T>(array: T[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
