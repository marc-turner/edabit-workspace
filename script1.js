// const intWithinBounds = (n, lower, upper) =>
//     Number.isInteger(n) ? n >= lower && n <= upper : false;

// function intWithinBounds(n, lower, upper) {
//     return Number.isInteger(n) ? n > lower && n < upper : false;
// }

// console.log(intWithinBounds(4.5, 3, 8));

// intWithinBounds(3, 1, 9) ➞ true

// intWithinBounds(6, 1, 6) ➞ false

// intWithinBounds(4.5, 3, 8) ➞ false

// const hackerSpeak = (str) =>
//     str
//         .replace(/a/g, '4')
//         .replace(/e/g, '3')
//         .replace(/i/g, '1')
//         .replace(/o/g, '0')
//         .replace(/s/g, '5');

// console.log(hackerSpeak('javascript is cool'));

// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"

// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"

// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

// function missingNum(arr) {
//     let newArr = [];
//     let lgNum = 10;
//     for (i = 1; i <= lgNum; i++) {
//         if (arr.indexOf(i) < 0) {
//             newArr.push(i);
//         }
//     }
//     return newArr[0];
// }

// console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));

// missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5

// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10

// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

// const equal = (a, b, c) =>
//     new Set([a, b, c]).size === 3
//         ? 0
//         : new Set([a, b, c]).size === 1
//         ? 3
//         : new Set([a, b, c]).size;

// console.log(equal(3, 4, 1));

// equal(3, 4, 3) ➞ 2

// equal(1, 1, 1) ➞ 3

// equal(3, 4, 1) ➞ 0

// const reverse = (str) => str
//         .split(' ')
//         .map((x) => (x.length > 5 ? [...x].reverse().join('') : x))
//         .join(' ');

// console.log(reverse('The dog is big.'));

// reverse("Reverse") ➞ "esreveR"

// reverse("This is a typical sentence.") ➞ "This is a lacipyt .ecnetnes"

// reverse("The dog is big.") ➞ "The dog is big."

// const factorize = (num) => Array.from(Array(num + 1), (_, i) => i).filter((x) => num % x === 0);

// console.log(factorize(17));

// factorize(12) ➞ [1, 2, 3, 4, 6, 12]

// factorize(4) ➞ [1, 2, 4]

// factorize(17) ➞ [1, 17]
