// Feel free to add new properties and methods to the class.
class MinMaxStack {
  constructor() {
    this.stack = [];
    this.minValue = null;
    this.maxValue = null;
  }

  getStack() {
    return this.stack;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.minValue = null;
    this.maxValue = null;

    const length = this.stack.length - 1;
    const poped = this.stack[length];
    let oldStack = this.stack;
    let start = 0;
    let end = length - 1;

    this.stack = [];

    if (start === end) {
      this.push(oldStack[start]);
    }

    while (start < end) {
      this.push(oldStack[start]);
      this.push(oldStack[end]);

      start += 1;
      end -= 1;
    }

    return poped;
  }

  push(number) {
    this.minValue = null;
    this.maxValue = null;

    this.stack[this.stack.length] = number;
  }

  getMin() {
    if (this.minValue) return this.minValue;

    let min = this.stack[0];
    let start = 1;
    let end = this.stack.length;

    while (start <= end) {
      if (this.stack[start] < min) {
        min = this.stack[start];
      }

      if (this.stack[end] < min) {
        min = this.stack[end];
      }

      start += 1;
      end -= 1;
    }

    this.minValue = min;

    return this.minValue;
  }

  getMax() {
    if (this.maxValue) return this.maxValue;

    let max = this.stack[0];
    let start = 1;
    let end = this.stack.length;

    while (start <= end) {
      if (this.stack[start] > max) {
        max = this.stack[start];
      }

      if (this.stack[end] > max) {
        max = this.stack[end];
      }

      start += 1;
      end -= 1;
    }

    this.maxValue = max;

    return this.maxValue;
  }
}

exports.MinMaxStack = MinMaxStack;
