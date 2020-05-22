// function validStrNumber(n) {
//     return !isNaN(n);
// }

// console.log(validStrNumber('54..4'));

// validStrNumber("324") ➞ true

// validStrNumber("324") ➞ true

// validStrNumber("54..4") ➞ false

// validStrNumber("number") ➞ false

// function alphanumericRestriction(str) {
//     return /^[a-z]+$/i.test(str) || /^\d+$/.test(str);
// }

// console.log(alphanumericRestriction('H3LL0'));

// alphanumericRestriction("Bold") ➞ true

// alphanumericRestriction("123454321") ➞ true

// alphanumericRestriction("H3LL0") ➞ false

// alphanumericRestriction("ed@bit") ➞ false

// function isValidDate(d, m, y) {
//     let dateObj = new Date(`${y}/${m}/${d}`);

//     if (Object.prototype.toString.call(dateObj) === '[object Date]') {
//         if (isNaN(dateObj.getTime())) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// }

// console.log(isValidDate(31, 6, 1980));

// isValidDate(35, 2, 2020) ➞ false
// // February doesn't have 35 days.

// isValidDate(8, 3, 2020) ➞ true
// // 8th March 2020 is a real date.

// isValidDate(31, 6, 1980) ➞ false
// // June only has 30 days.

// function mean(num) {
//     return num.toString().split('');
// }

// console.log(mean(42));

// mean(42) ➞ 3

// mean(12345) ➞ 3

// mean(666) ➞ 6

// function removeRepeats(str) {
//     return str;
// }

// console.log(removeRepeats('aaabbbccc'));

// removeRepeats("aaabbbccc") ➞ "abc"

// removeRepeats("bookkeeper") ➞ "bokeper"

// removeRepeats("nananana") ➞ "nananana"
