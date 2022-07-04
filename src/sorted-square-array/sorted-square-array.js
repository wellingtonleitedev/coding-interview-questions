function sortedSquaredArray(array) {
  let squaredArray = [];
  let start = 0;
  let end = array.length - 1;
  let pointer = array.length - 1;

  while (start <= end && pointer >= 0) {
    if (Math.abs(array[start]) >= Math.abs(array[end])) {
      squaredArray[pointer] = array[start] ** 2;
      start += 1;
    } else {
      squaredArray[pointer] = array[end] ** 2;
      end -= 1;
    }

    pointer -= 1;
  }

  return squaredArray;
}

sortedSquaredArray([-10, -5, 0, 5, 10]);

exports.sortedSquaredArray = sortedSquaredArray;
