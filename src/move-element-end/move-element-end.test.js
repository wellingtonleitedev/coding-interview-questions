import { moveElementToEnd } from "./move-element-end";

const sorted = (array) => array.sort((a, b) => a - b);

describe("Move Element to end Test", () => {
  it("Test Case #1", function () {
    const array = [2, 1, 2, 2, 2, 3, 4, 2];
    const toMove = 2;
    const expectedStart = [1, 3, 4];
    const expectedEnd = [2, 2, 2, 2, 2];
    const output = moveElementToEnd(array, toMove);
    const outputStart = sorted(output.slice(0, 3));
    const outputEnd = output.slice(3);
    expect(outputStart).toEqual(expectedStart);
    expect(outputEnd).toEqual(expectedEnd);
  });
});
