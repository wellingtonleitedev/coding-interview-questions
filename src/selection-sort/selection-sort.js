function selectionSort(array) {
  for (var i = 0; i < array.length; i++) {
    let minorIndex = i;

    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[minorIndex]) {
        minorIndex = j;
      }
    }

    [array[minorIndex], array[i]] = [array[i], array[minorIndex]];
  }

  return array;
}

const input = [8, 5, 2, 9, 5, 6, 3];
selectionSort(input);

exports.selectionSort = selectionSort;
