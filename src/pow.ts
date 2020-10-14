/**
 * pow
 *
 * @description this function returns base^exponent without using `Math.pow` or the `**` operator
 * @param base is an positive integer
 * @param exponent is an positive integer
 *
 * @returns base^exponent
 */
export const pow = recursivePow;
// export const pow = iterativePow;

export function iterativePow(base: number, exponent: number): number {
  let result = 1;

  for (let index = 0; index < exponent; index++) {
    result = result * base;
  }

  return result;
}

export function recursivePow(base: number, exponent: number): number {
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
