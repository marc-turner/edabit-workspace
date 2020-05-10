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

// const catchZeroDivision = (expr) => !isFinite(expr);

// console.log(catchZeroDivision('0 / 0'));

// catchZeroDivision("2 / 0") ➞ true

// catchZeroDivision("4 / (2 + 3 - 5)") ➞ true

// catchZeroDivision("2 * 5 - 10") ➞ false

// function removeEnemies(names, enemies) {
//     return names.filter((x) => !enemies.includes(x));
// }

// console.log(removeEnemies(['John', 'Emily', 'Steve', 'Sam'], ['Sam', 'John']));

// removeEnemies(["Fred"], []) ➞ ["Fred"]

// removeEnemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"]) ➞ ["Adam", "Tanya"]

// removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"]) ➞ ["Emily", "Steve"]

// const indexMultiplier = (arr) =>
//     arr.length ? arr.map((x, i) => x * i).reduce((c, a) => c + a) : 0;

// console.log(indexMultiplier([-3, 0, 8, -6]));

// indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

// indexMultiplier([-3, 0, 8, -6]) ➞ -2
// // (-3*0 + 0*1 + 8*2 + -6*3)

const removeLeadingTrailing = (n) => +n.toString();

console.log(removeLeadingTrailing('30'));

// removeLeadingTrailing("230.000") ➞ "230"

// removeLeadingTrailing("00402") ➞ "402"

// removeLeadingTrailing("03.1400") ➞ "3.14"

// removeLeadingTrailing("30") ➞ "30"

// return n.includes('.')
//     ? n.replace(/(0+)$/, '').replace(/^0+/, '')
//     : n.replace(/^0+/, '');

// return +n % 1 === 0 ? +n.toString() : +n ;
