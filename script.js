// const rev = (n) => Math.abs(n).toString().split('').reverse().join('');

// console.log(rev(-122157));

// rev(5121) ➞ "1215"

// rev(69) ➞ "96"

// rev(-122157) ➞ "751221"

// const getDistance = (a, b) =>
//     typeof +Math.hypot(a.x - b.x, a.y - b.y).toFixed(3);

// console.log(getDistance({ x: 10, y: -5 }, { x: 8, y: 16 }));

// getDistance({x: -2, y: 1}, {x: 4, y: 3}) ➞ 6.325

// getDistance({x: 0, y: 0}, {x: 1, y: 1}) ➞ 1.414

// getDistance({x: 10, y: -5}, {x: 8, y: 16}) ➞ 21.095

// const solveForExp = (a, b) => Math.round(Math.log(b) / Math.log(a));

// console.log(solveForExp(9, 3486784401));

// solveForExp(4, 1024) ➞ 5

// solveForExp(2, 1024) ➞ 10

// solveForExp(9, 3486784401) ➞ 10

// function getDay(day) {
//     const days = [
//         'Sunday',
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday',
//     ];
//     return days[new Date(day).getDay()];
// }

// console.log(getDay('09/04/2016'));

// getDay("12/07/2016") ➞ "Wednesday"

// getDay("09/04/2016") ➞ "Sunday"

// getDay("12/08/2011") ➞ "Thursday"

// function wordNest(word, nest) {
//     return nest.length / word.length - 1;
// }

// console.log(wordNest('floor', 'floor'));

// wordNest("floor", "floor") ➞ 0

// wordNest("code", "cocodccococodededeodeede") ➞ 5

// wordNest("incredible", "increinincrincredibleediblecredibledible") ➞ 3

// const uniqueSort = (arr) => Array.from(new Set(arr)).sort((a, b) => a - b);

// console.log(uniqueSort([1, 2, 4, 3, 10]));

// uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]

// uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]

// uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
