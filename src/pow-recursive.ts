/**
 * @description Returns the `base` to the `exponent` power
 * @param {number} base - is an positive integer
 * @param {number} exponent - is an positive integer
 * @return {number} `base` raised to the power of `exponent`
 */
export function pow(base: number, exponent: number): number {
  if (exponent === 0) {
    return 1;
  }

  const nextExponent = Math.trunc(exponent / 2);

  if (exponent % 2 == 0) {
    return pow(base, nextExponent) * pow(base, nextExponent);
  } else {
    return base * pow(base, nextExponent) * pow(base, nextExponent);
  }
}
