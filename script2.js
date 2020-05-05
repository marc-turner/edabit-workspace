// const clearFog = (str) =>
//     !/[fog]/gi.test(str) ? "It's a clear day!" : str.match(/[^fog]/gi).join('');

// console.log(clearFog('fogFogFogffffooobirdsandthebeesGGGfogFog'));

// clearFog("sky") ➞ "It's a clear day!"

// clearFog("fogfogfffoooofftreesggfoogfog") ➞ "trees"

// clearFog("fogFogFogffffooobirdsandthebeesGGGfogFog") ➞ "birdsandthebees"

// function arrayOfMultiples(num, length) {
//     let newArr = [];
//     for (let i = 1; i <= length; i++) {
//         newArr.push(num * i);
//     }
//     return newArr;
// }

// console.log(arrayOfMultiples(7, 5));

// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// function factorGroup(num) {
//     return Number.isInteger(Math.sqrt(num)) ? 'even' : 'odd';
// }

// console.log(factorGroup(33));

// factorGroup(33) ➞ "even"

// factorGroup(36) ➞ "odd"

// factorGroup(7) ➞ "even"

// const isSafeBridge = str => !str.includes(' ');

// console.log(isSafeBridge('####'));

// isSafeBridge("####") ➞ true

// isSafeBridge("## ####") ➞ false

// isSafeBridge("#") ➞ true

// function changeEnough(change, amountDue) {
//     let sum = 0;
//     const coinVals = [0.25, 0.1, 0.05, .01];
//     for (let i = 0; i < 4; i++) {
//         sum = sum + change[i] * coinVals[i];
//     }
//     return sum > amountDue;
// }

// console.log(changeEnough([0, 0, 20, 5], 0.75));

// changeEnough([2, 100, 0, 0], 14.11) ➞ false

// changeEnough([0, 0, 20, 5], 0.75) ➞ true

// changeEnough([30, 40, 20, 5], 12.55) ➞ true

// changeEnough([10, 0, 0, 50], 3.85) ➞ false

// changeEnough([1, 0, 5, 219], 19.99) ➞ false

// function isSastry(num) {
//     return Number.isInteger(
//         Math.sqrt(+(num.toString() + (num + 1).toString()))
//     );
// }

// console.log(isSastry(183));

// isSastry(183) ➞ true
// // Concatenation of n and its successor = 183184
// // 183184 is a perfect square (428 ^ 2)

// isSastry(184) ➞ false
// // Concatenation of n and its successor = 184185
// // 184185 is not a perfect square

// isSastry(106755) ➞ true
// // Concatenation of n and its successor = 106755106756
// // 106755106756 is a perfect square (326734 ^ 2)

// const stripSentence = (str, chars) =>
//     str.replace(new RegExp(`[^${chars}]`, 'g'), '');

// console.log(
//     stripSentence('the quick brown fox jumps over the lazy dog', 'aeiou')
// );

// stripSentence("the quick brown fox jumps over the lazy dog", "aeiou") ➞ "th qck brwn fx jmps vr th lzy dg"

// stripSentence("the hissing snakes sinisterly slither across the rustling leaves", "s") ➞ "the hiing nake initerly lither acro the rutling leave"

// stripSentence("gone, reduced to atoms", "go, muscat nerd") ➞ ""

// function concat(...args) {
//     return args.flat(1);
// }

// console.log(concat([1, 2, 3], [4, 5], [6, 7]));

// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]

const triangle = (n) => (n === 1 ? 1 : (n * (n + 1)) / 2);

console.log(triangle(215));

// triangle(1) ➞ 1

// triangle(6) ➞ 21

// triangle(215) ➞ 23220
