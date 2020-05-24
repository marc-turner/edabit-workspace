// function unrepeated(str) {
//     return [...new Set(str)].join('');
// }

// console.log(unrepeated('hello'));

// unrepeated("hello")➞ "helo"

// unrepeated("aaaaa")➞ "a"

// unrepeated("WWE!!!") ➞ "WE!"

// unrepeated("call 911") ➞ "cal 91"

// function getMiddle(str) {
//     return str.length === 1
//         ? str
//         : str.length % 2 === 0
//         ? `${str[str.length / 2 - 1]}${str[str.length / 2]}`
//         : str[Math.floor(str.length / 2)];
// }

// console.log(getMiddle('test'));

// getMiddle("test") ➞ "es"

// getMiddle("testing") ➞ "t"

// getMiddle("middle") ➞ "dd"

// getMiddle("A") ➞ "A"

// `${str[str.length / 2 - 1]}${str[str.length / 2]}`

// function letterAtPosition(n) {
//     const alpha = 'abcdefghijklmnopqrstuvwxyz';
//     return n > 0 && n % 1 === 0 ? alpha[n - 1].toLowerCase() : 'invalid';
// }

// console.log(letterAtPosition(4.5));

// letterAtPosition(1) ➞ "a"

// letterAtPosition(26.0) ➞ "z"

// letterAtPosition(0) ➞ "invalid"

// letterAtPosition(4.5) ➞ "invalid"

// function removeDups(arr) {
//     return [...new Set(arr)];
// }

// console.log(removeDups(['The', 'big', 'cat']));

// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]

// function findZip(str) {
//     return str.toLowerCase().replace('z', 'x').lastIndexOf('z');
// }

// console.log(findZip('all zip files are compressed'));

// findZip("all zip files are zipped") ➞ 18

// findZip("all zip files are compressed") ➞ -1

// function reverseImage(image) {
//     return image.map((x) => x.map((y) => (y === 0 ? (y = 1) : (y = 0))));
// }

// console.log(
//     reverseImage([
//         [1, 0, 0],
//         [0, 1, 0],
//         [0, 0, 1],
//     ])
// );

// reverseImage([
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1]
//   ]) ➞ [
//     [0, 1, 1],
//     [1, 0, 1],
//     [1, 1, 0]
//   ]

//   reverseImage([
//     [1, 1, 1],
//     [0, 0, 0]
//   ]) ➞ [
//     [0, 0, 0],
//     [1, 1, 1]
//   ]

//   reverseImage([
//     [1, 0, 0],
//     [1, 0, 0]
//   ]) ➞ [
//     [0, 1, 1],
//     [0, 1, 1]
//   ]
