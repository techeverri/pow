import { pow } from "./../src/pow";

describe("pow", () => {
  it("returns 4 when base is 2 and exponent is 2 (2^2 = 4)", () => {
    const base = 2;
    const exponent = 2;
    expect(pow(base, exponent)).toBe(4);
  });

  it("returns 16 when base is 2 and exponent is 4 (2^4 = 16)", () => {
    const base = 2;
    const exponent = 4;
    expect(pow(base, exponent)).toBe(16);
  });

  it("returns 27 when base is 3 and exponent is 3 (3^3 = 27) ", () => {
    const base = 3;
    const exponent = 3;
    expect(pow(base, exponent)).toBe(27);
  });

  it("returns 1 when exponent is zero (7^0 = 1)", () => {
    const base = 7;
    const exponent = 0;
    expect(pow(base, exponent)).toBe(1);
  });

  it("returns 0 when base is zero (0^5 = 0)", () => {
    const base = 0;
    const exponent = 5;
    expect(pow(base, exponent)).toBe(0);
  });

  it("returns 1 when base is 0 and exponent is 0 (0^0 = 1)", () => {
    const base = 0;
    const exponent = 0;
    expect(pow(base, exponent)).toBe(1);
  });

  it("returns 10460353203 when base is 3 and exponent is 21 (3^21 = 10460353203) ", () => {
    const base = 3;
    const exponent = 21;
    expect(pow(base, exponent)).toBe(10460353203);
  });
});
