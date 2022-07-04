import { nonConstructibleChange } from "./non-constructible";

describe("Non Constructible Change Test", () => {
  it("Test Case #1", () => {
    const input = [5, 7, 1, 1, 2, 3, 22];
    expect(nonConstructibleChange(input)).toEqual(20);
  });
});
