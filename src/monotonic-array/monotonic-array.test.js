const { isMonotonic } = require("./monotonic-array");

it("Test Case #1", () => {
  const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
  const expected = true;
  const actual = isMonotonic(array);
  expect(actual).toEqual(expected);
});
