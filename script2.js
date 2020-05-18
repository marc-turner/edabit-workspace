// function evenOddTransform(arr, n) {
//     return arr.map((x) => (x % 2 === 1 ? x + n * 2 : x + n * -2));
// }

// console.log(evenOddTransform([1, 2, 3], 1));

// evenOddTransform([3, 4, 9], 3) ➞ [9, -2, 15]
// // Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]

// evenOddTransform([0, 0, 0], 10) ➞ [-20, -20, -20]

// evenOddTransform([1, 2, 3], 1) ➞ [3, 0, 5]

// function XO(str) {
//     if (!str.includes('x') && !str.includes('o')) {
//         return true;
//     }
//     if (
//         (!str.includes('x') && str.includes('o')) ||
//         (str.includes('x') && !str.includes('o'))
//     ) {
//         return false;
//     }
//     if (str.includes('x') && str.includes('o')) {
//         return [...str.toLowerCase()].sort().join('');
//     }

//     return str;
// }

// console.log(XO('ooxx'));

// XO("ooxx") ➞ true

// XO("xooxx") ➞ false

// XO("ooxXm") ➞ true
// // Case insensitive.

// XO("zpzpzpp") ➞ true
// // Returns true if no x and o.

// XO("zzoo") ➞ false

// function capMe(arr) {
//     // return arr.map((x) => x.toLowerCase().charAt(0).toUpperCase() + x.slice(1));
//     return arr.map((x) => x.toLowerCase().charAt(0).toUpperCase() + x.slice(1).toLowerCase());
// }

// console.log(capMe(['samuel', 'MABELLE', 'letitia', 'meridith']));

// capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]

// capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

// capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
