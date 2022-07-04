function bubbleSort(array) {
  let isSorted = false;
  let counter = 0;

  while (!isSorted) {
    isSorted = true;
    for (var i = 0; i < array.length - 1 - counter; i++) {
      if (array[i + 1] < array[i]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        isSorted = false;
      }
    }
    counter += 1;
  }

  return array;
}

const input = [8, 5, 2, 9, 5, 6, 3];
bubbleSort(input);

exports.bubbleSort = bubbleSort;
