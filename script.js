// const boxSeq = (step) => (step === 0 ? 0 : step % 2 === 0 ? step : step + 2);

// console.log(boxSeq(99));

// boxSeq(0) ➞ 0

// boxSeq(1) ➞ 3

// boxSeq(2) ➞ 2

// const xmasItems = (n) => (n * (n + 1) * (n + 2)) / 6;

// console.log(xmasItems(0));

// xmasItems(12) ➞ 364

// xmasItems(3) ➞ 10

// xmasItems(31) ➞ 5456

// const countOnes = (i) => i.toString(2).replace(/0/g, '').length;

// console.log(countOnes(999));

// countOnes(0) ➞ 0

// countOnes(100) ➞ 3

// countOnes(999) ➞ 8

// function greetingMaker(salutation) {
//     return function closure(name) {
//         return salutation + ', ' + name;
//     };
// }

// console.log(greeting('James'));

// const greeting = greetingMaker('Hello');
// greeting('James');
// ➞ "Hello, James"

// const calculator = (num1, operator, num2) =>
//     num2 ? eval(`${num1}${operator}${num2}`) : "Can't divide by 0!";

// console.log(calculator(4, '/', 2));

// calculator(2, "+", 2) ➞ 4

// calculator(2, "*", 2) ➞ 4

// calculator(4, "/", 2) ➞ 2

// function progressDays(runs) {
//     // let arr = [];
//     // for (let i = 1; i < runs.length; i++) {
//     //     if (runs[i] > runs[i - 1]) {
//     //         arr.push(runs[i]);
//     //     }
//     // }
//     // return arr.length;
//     return runs.filter((x, i, a) => x < a[i + 1]).length;
// }

// console.log(progressDays([3, 4, 1, 2]));

// progressDays([3, 4, 1, 2]) ➞ 2
// // There are two progress days, (3->4) and (1->2)

// progressDays([10, 11, 12, 9, 10]) ➞ 3

// progressDays([6, 5, 4, 3, 2, 9]) ➞ 1

// progressDays([9, 9])  ➞ 0

const catchZeroDivision = (expr) => !isFinite(eval(expr));

console.log(catchZeroDivision('2 * 5 - 10'));

// catchZeroDivision("2 / 0") ➞ true

// catchZeroDivision("4 / (2 + 3 - 5)") ➞ true

// catchZeroDivision("2 * 5 - 10") ➞ false
