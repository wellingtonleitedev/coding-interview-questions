import { threeNumberSum } from "./three-number-sum";

describe("Three Number Sum", () => {
  it("Test Case #1", () => {
    const input = [12, 3, 1, 2, -6, 5, -8, 6];
    const targetSum = 0;
    const expected = [
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 1, 5],
    ];

    expect(threeNumberSum(input, targetSum)).toEqual(expected);
  });
});
