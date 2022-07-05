import { smallestDifference } from "./smallest-difference";

describe("Smallest Difference", () => {
  it("Test Case #1", function () {
    expect(
      smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])
    ).toEqual([28, 26]);
  });
});
