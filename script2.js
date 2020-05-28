// const arrayOperation = (x, y, n) =>
//     Array.from({ length: y - x + 1 }, (_, i) => x + i * 1).filter((x) => x % n === 0);

// console.log(arrayOperation(15, 20, 7));

// arrayOperation(1, 10, 3) ➞ [3, 6, 9]

// arrayOperation(7, 9, 2) ➞ [8]

// arrayOperation(15, 20, 7) ➞ []

// const isIsogram = (str) => [...new Set(str.toLowerCase())].join('');

// console.log(isIsogram('Algorism'));

// isIsogram("Algorism") ➞ true

// isIsogram("PasSword") ➞ false
// // Not case sensitive.

// isIsogram("Consecutive") ➞ false

// const sumTwoSmallestNums = (arr) =>
//     arr
//         .filter((x) => x >= 0)
//         .sort((a, b) => a - b)
//         .slice(0, 2)
//         .reduce((a, b) => a + b);

// console.log(sumTwoSmallestNums([2, 9, 6, -1]));

// sumTwoSmallestNums([19, 5, 42, 2, 77]) ➞ 7

// sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) ➞ 3453455

// sumTwoSmallestNums([2, 9, 6, -1]) ➞ 8

// sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) ➞ 563

// sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]) ➞ 4519
// /////////////////////////////////////////////////////////
// function counterpartCharCode(char) {
//     return char == char.toLowerCase()
//         ? char.toUpperCase().charCodeAt(0)
//         : char.toLowerCase().charCodeAt(0);
// }

// console.log(counterpartCharCode('è'));

// counterpartCharCode("A") ➞ 97

// counterpartCharCode("a") ➞ 65
// **********************************
// function alphNum(str) {
//     const ab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     return [...str].map((x) => ab.indexOf(x)).join(' ');
// }

// console.log(alphNum('XYZ'));

// alphNum("XYZ") ➞ "23 24 25"

// alphNum("ABCDEF") ➞ "0 1 2 3 4 5"

// alphNum("JAVASCRIPT") ➞ "9 0 21 0 18 2 17 8 15 19"
// ************************************
// const validatePIN = (pin) =>
//     pin.length !== 4 && pin.length !== 6 ? false : /^\d+$/.test(pin);

// console.log(validatePIN('1234'));

// validatePIN("1234") ➞ true

// validatePIN("12345") ➞ false

// validatePIN("a234") ➞ false

// validatePIN("") ➞ false
// ////////////////////////////////////////////////////////
