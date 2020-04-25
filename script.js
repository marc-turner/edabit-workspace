const mauriceWins = (mSnails, sSnails) =>
    mSnails[0] < sSnails[2] &&
    mSnails[1] > sSnails[0] &&
    mSnails[2] > sSnails[1];

// console.log(mauriceWins([3, 5, 10], [4, 7, 11]));
console.log(mauriceWins([6, 8, 9], [7, 12, 14]));
