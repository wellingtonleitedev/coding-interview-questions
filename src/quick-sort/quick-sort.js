function quickSort(array) {
  const pivot = 0;
  let left = pivot + 1;
  let right = array.length - 1;

  while (right >= left) {
    if (array[left] > array[pivot] && array[right] < array[pivot]) {
      [array[left], array[right]] = [array[right], array[left]];
    }

    if (array[left] <= array[pivot]) {
      left += 1;
    }

    if (array[right] >= array[pivot]) {
      right -= 1;
    }
  }

  [array[pivot], array[right]] = [array[right], array[pivot]];

  if (array[right - 1] < array[pivot]) {
    quickSort(array);
  }

  console.log({ array });
  return array;
}

const input = [1, 3, 2];
quickSort(input);

exports.quickSort = quickSort;
