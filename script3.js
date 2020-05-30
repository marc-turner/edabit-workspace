// function linesAreParallel(l1, l2) {
//     return l1[0] === l2[0] && l2[1] === l2[1];
// }

// console.log(linesAreParallel([0, 1, 5], [0, 1, 5]));

// linesAreParallel([1, 2, 3], [1, 2, 4]) ➞ true
// // x+2y=3 and x+2y=4 are parallel.

// linesAreParallel([2, 4, 1], [4, 2, 1]) ➞ false
// // 2x+4y=1 and 4x+2y=1 are not parallel.

// linesAreParallel([0, 1, 5], [0, 1, 5]) ➞ true
// // Lines are parallel to themselves.

// function formatNum(num) {
//     return num.toLocaleString();
// }

// console.log(formatNum('1,000'));

// formatNum(1000) ➞ "1,000"

// formatNum(100000) ➞ "100,000"

// formatNum(20) ➞ "20"

// function numOfSubbarrays(arr) {
//     return arr.filter((x) => typeof x === 'object').length;
// }

// console.log(
//     numOfSubbarrays([
//         [1, 2, 3],
//         [1, 2, 3],
//         [1, 2, 3],
//         [1, 2, 3],
//     ])
// );

// numOfSubbarrays([[1, 2, 3]]) ➞ 1

// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3

// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4

// numOfSubbarrays([1, 2, 3]) ➞ 0

// function fizzBuzz(number) {
//     return [...Array(number + 1).keys()]
//         .slice(1)
//         .map((x) =>
//             x % 3 == 0 && x % 5 == 0
//                 ? 'FizzBuzz'
//                 : x % 3 == 0
//                 ? 'Fizz'
//                 : x % 5 == 0
//                 ? 'Buzz'
//                 : x
//         );
// }

// console.log(fizzBuzz(15));

// fizzBuzz(10) ➞ [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']

// fizzBuzz(15) ➞ [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']

// function removeSpecialCharacters(str) {
//     return str.replace(/[^\w\s]+/gi, ' ');
// }

// console.log(removeSpecialCharacters('%fd76$fd(-)6GvKlO.'));

// removeSpecialCharacters("The quick brown fox!") ➞ "The quick brown fox"

// removeSpecialCharacters("%fd76$fd(-)6GvKlO.") ➞ "fd76fd-6GvKlO"

// removeSpecialCharacters("D0n$c sed 0di0 du1") ➞ "D0nc sed 0di0 du1"
