function nonConstructibleChange(coins) {
  if (!coins.length) return 1;
  let minChange = 0;
  coins.sort((a, b) => a - b);

  for (var index = 0; index < coins.length; index++) {
    if (coins[index] > minChange + 1) break;
    minChange += coins[index];
  }

  return minChange + 1;
}

nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]);

exports.nonConstructibleChange = nonConstructibleChange;
