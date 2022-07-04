function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    let j = i;

    while (j > 0 && array[j] < array[j - 1]) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
      j -= 1;
    }
  }

  return array;
}

const input = [8, 5, 2, 9, 5, 6, 3];
insertionSort(input);

exports.insertionSort = insertionSort;
