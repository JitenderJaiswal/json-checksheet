const DIGITS: { [key: number]: string } = {
  0: '⁰',
  1: '¹',
  2: '²',
  3: '³',
  4: '⁴',
  5: '⁵',
  6: '⁶',
  7: '⁷',
  8: '⁸',
  9: '⁹',
};

export function toSuperScript(input: string): string {
  if (isNaN(Number(input))) {
    let stringArr = input.split('');
    let lastValue = stringArr[stringArr.length - 1];
    if (lastValue in DIGITS) {
      stringArr[stringArr.length - 1] =
        DIGITS[lastValue as unknown as keyof typeof DIGITS];
    }
    return stringArr.join('');
  }
  return input;
}

export const toSuperScriptMod = (string: any) => {
  if (isNaN(Number(string))) {
    let stringArr = string.split('');
    let secondLastValue = stringArr[stringArr.length - 2];
    let lastValue = stringArr[stringArr.length - 1];
    if (secondLastValue === '^') {
      if (lastValue in DIGITS) {
        stringArr[stringArr.length - 2] = DIGITS[lastValue];
        stringArr[stringArr.length - 1] = '';
      }
    }
    return stringArr.join('');
  }
  return string;
};
