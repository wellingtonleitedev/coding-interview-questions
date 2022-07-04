import { threeNumberSort } from "./three-number-sort";

describe("Non Constructible Change Test", () => {
  it("Test Case #1", () => {
    const array = [1, 0, 0, -1, -1, 0, 1, 1];
    const order = [0, 1, -1];
    const expected = [0, 0, 0, 1, 1, 1, -1, -1];
    expect(threeNumberSort(array, order)).toEqual(expected);
  });
});
