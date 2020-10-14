/**
 * @description Returns the `base` to the `exponent` power
 * @example pow(2, 4) // returns 16
 * @example pow(3, 3) // returns 27
 * @param {number} base - is an positive integer
 * @param {number} exponent - is an positive integer
 * @return {number} `base` raised to the power of `exponent`
 */
export function pow(base: number, exponent: number): number {
  let result = 1;

  for (let index = 0; index < exponent; index++) {
    result = result * base;
  }

  return result;
}
