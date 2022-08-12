import { MinMaxStack } from "./min-max-stack-construction";

function testMinMaxPeek(min, max, peek, stack) {
  expect(stack.getMin()).toEqual(min);
  expect(stack.getMax()).toEqual(max);
  expect(stack.peek()).toEqual(peek);
}

it("Test Case #1", function () {
  const stack = new MinMaxStack();
  stack.push(5);
  testMinMaxPeek(5, 5, 5, stack);
  stack.push(7);
  testMinMaxPeek(5, 7, 7, stack);
  stack.push(2);
  testMinMaxPeek(2, 7, 2, stack);
  expect(stack.pop()).toEqual(2);
  expect(stack.pop()).toEqual(7);
  testMinMaxPeek(5, 5, 5, stack);
});
