import { sortedSquaredArray } from "./sorted-square-array";

describe("Sorted Square Array Test", () => {
  it("Test Case #1", function () {
    const input = [1, 2, 3, 5, 6, 8, 9];
    const expected = [1, 4, 9, 25, 36, 64, 81];
    expect(sortedSquaredArray(input)).toEqual(expected);
  });
});
