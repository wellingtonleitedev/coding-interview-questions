function moveElementToEnd(array, toMove) {
  for (var i = 0; i < array.length; i++) {
    var j = i + 1;

    while (j < array.length) {
      if (array[j] != toMove) {
        [array[j], array[i]] = [array[i], array[j]];
      }
      j += 1;
    }
  }

  return array;
}

moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2);

exports.moveElementToEnd = moveElementToEnd;
