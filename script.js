// function redundant(str) {
//     return function f1() {
//         return str;
//     };
// }

// console.log(redundant('apple'));

// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""

// const formatMath = (expr) => `${expr} = ${eval(expr.replace('x', '*'))}`;

// console.log(formatMath('4 x 5'));

// formatMath("3 + 4") ➞ "3 + 4 = 7"

// formatMath("3 - 2") ➞ "3 - 2 = 1"

// formatMath("4 x 5") ➞ "4 x 5 = 20"

// formatMath("6 / 3") ➞ "6 / 3 = 2"

const catchZeroDivision = (expr) => !isFinite(expr);

console.log(catchZeroDivision('0 / 0'));

// catchZeroDivision("2 / 0") ➞ true

// catchZeroDivision("4 / (2 + 3 - 5)") ➞ true

// catchZeroDivision("2 * 5 - 10") ➞ false
