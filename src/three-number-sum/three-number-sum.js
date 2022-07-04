function threeNumberSum(array, targetSum) {
  const triplets = [];

  array.sort((a, b) => a - b);

  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      for (var k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === targetSum) {
          triplets.push([array[i], array[j], array[k]]);
          break;
        }
      }
    }
  }

  return triplets;
}

const input = [12, 3, 1, 2, -6, 5, -8, 6];
threeNumberSum(input, 0);

exports.threeNumberSum = threeNumberSum;
