function threeNumberSort(array, order) {
  let subArrayIndex = 0;
  for (var i = 0; i < order.length; i++) {
    for (var j = subArrayIndex; j < array.length; j++) {
      if (array[j] == order[i]) {
        [array[subArrayIndex], array[j]] = [array[j], array[subArrayIndex]];
        subArrayIndex += 1;
      }
    }
  }

  return array;
}

const array = [-2, -3, -3, -3, -3, -3, -2, -2, -3];
const order = [-2, -3, 0];
threeNumberSort(array, order);

exports.threeNumberSort = threeNumberSort;
