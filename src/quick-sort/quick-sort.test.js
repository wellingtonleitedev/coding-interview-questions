import { quickSort } from "./quick-sort";

describe("Quick Sort Test", () => {
  it("Test Case #1", function () {
    const input = [8, 5, 2, 9, 5, 6, 3];
    expect(quickSort(input)).toEqual([2, 3, 5, 5, 6, 8, 9]);
  });
});
