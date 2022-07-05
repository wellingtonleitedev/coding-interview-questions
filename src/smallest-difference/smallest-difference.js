function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let minorDifference = Math.abs(arrayOne[0] - arrayTwo[0]);
  let smallestDifferenceArray = [arrayOne[0], arrayTwo[0]];

  for (var i = 1; i < arrayOne.length; i++) {
    for (var j = 0; j < arrayTwo.length; j++) {
      var difference = Math.abs(arrayOne[i] - arrayTwo[j]);

      if (difference < minorDifference) {
        minorDifference = difference;
        smallestDifferenceArray = [arrayOne[i], arrayTwo[j]];
      }
    }
  }

  return smallestDifferenceArray;
}

const one = [-1, 5, 10, 20, 28, 3];
const two = [26, 134, 135, 15, 17];

smallestDifference(one, two);
exports.smallestDifference = smallestDifference;
