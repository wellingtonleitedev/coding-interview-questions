function isMonotonic(array) {
  let isMonotonicArray = true;
  let start = 0;
  let end = array.length - 1;

  if (array.length <= 1) return isMonotonicArray;

  if (array[start] < array[end]) {
    for (var i = start + 1; i < end; i++) {
      if (array[i] > array[i + 1]) isMonotonicArray = false;
    }
  } else {
    for (var i = start + 1; i < end; i++) {
      if (array[i] < array[i + 1]) isMonotonicArray = false;
    }
  }

  return isMonotonicArray;
}

console.log(isMonotonic([1, 2, -1, -2, -5]));
exports.isMonotonic = isMonotonic;
