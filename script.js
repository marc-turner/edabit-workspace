// const filterArray = (arr) => arr.filter((x) => Number.isInteger(x));

// console.log(filterArray([1, 2, 3, 'a', 'b', 4]));

// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]

// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]

// filterArray(["Nothing", "here"]) ➞ []

// const isFloatingCharacter = (num) => /^-?\d*\.\d+$/.test(num);

// console.log(isFloatingCharacter('av0.12'));

// isFloatingCharacter("12.12") ➞ true

// isFloatingCharacter("12.") ➞ false

// isFloatingCharacter(".1") ➞ true

// isFloatingCharacter("-.1") ➞ true

// isFloatingCharacter("abc") ➞ false

// Test.assertEquals(isFloatingCharacter('12'), false);

// Test.assertEquals(isFloatingCharacter("av0.12"),false)

// function validateEmail(str) {
//     return str.indexOf('@') < 1 || str.index;
// }

// console.log(validateEmail('hello@edabit.com'));

// validateEmail("@gmail.com") ➞ false

// validateEmail("hello.gmail@com") ➞ false

// validateEmail("gmail") ➞ false

// validateEmail("hello@gmail") ➞ false

// validateEmail("hello@edabit.com") ➞ true

// const uniqueArr = (arr) => [...new Set(arr)].filter((x) => x > 0);

// console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]));

// uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]) ➞ [1, 3]

// uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]) ➞ [3, 5]

// uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]) ➞ [10, 6, 13, 5]

const nextInLine = (arr, num) =>
    !arr.length ? 'No array has been selected' : [...arr, num].slice(1);

console.log(nextInLine([5, 6, 7, 8, 9], 1));

// nextInLine([5, 6, 7, 8, 9], 1) ➞ [6, 7, 8, 9, 1]

// nextInLine([7, 6, 3, 23, 17], 10) ➞ [6, 3, 23, 17, 10]

// nextInLine([1, 10, 20, 42 ], 6) ➞ [10, 20, 42, 6]

// nextInLine([], 6) ➞ "No array has been selected"
