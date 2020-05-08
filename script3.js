// function censor(str) {
//     return str
//         .split(' ')
//         .map((x) => (x.length <= 4 ? x : x.replace(/[\w]/gi, '*')))
//         .join(' ');
// }

// console.log(censor('The code is fourty'));

// censor("The code is fourty") ➞ "The code is ******"

// censor("Two plus three is five") ➞ "Two plus ***** is five"

// censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"

// function getEquivalent(note) {
//     let sharpArr = ['C#', 'D#', 'F#', 'G#', 'A#'];
//     let flatArr = ['Db', 'Eb', 'Gb', 'Ab', 'Bb'];
//     return sharpArr.includes(note)
//         ? flatArr[sharpArr.indexOf(note)]
//         : sharpArr[flatArr.indexOf(note)];
// }

// console.log(getEquivalent('Bb'));

// getEquivalent("D#") ➞ "Eb"

// getEquivalent("Gb") ➞ "F#"

// getEquivalent("Bb") ➞"A#"

// const longBurp = (num) => 'Bu' + 'r'.repeat(num) + 'p';

// console.log(longBurp(5));

// longBurp(3) ➞ "Burrrp"

// longBurp(5) ➞ "Burrrrrp"

// longBurp(9) ➞ "Burrrrrrrrrp"

// const diceGame = (arr) =>
//     arr.every((x) => x[0] !== x[1]) ? arr.flat().reduce((a, c) => a + c) : 0;

// console.log(
//     diceGame([
//         [1, 1],
//         [5, 6],
//         [6, 4],
//     ])
// );

// diceGame([[1, 2], [3, 4], [5, 6]]) ➞ 21

// diceGame([[1, 1], [5, 6], [6, 4]]) ➞ 0

// diceGame([[4, 5], [4, 5], [4, 5]]) ➞ 27

// const filterUnique = (arr) => arr.filter((x) => new Set(x).size === x.length);

// console.log(filterUnique(['88', '999', '989', '9988', '9898']));

// filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]) ➞ ["abc"]
// // "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.

// filterUnique(["88", "999", "989", "9988", "9898"]) ➞ []

// filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]) ➞ ["ABCDE", "BED", "BAC"]

// const testJackpot = (result) => new Set(result).size === 1;

// console.log(testJackpot(['&&', '&', '&&&', '&&&&']));

// testJackpot(["@", "@", "@", "@"]) ➞ true

// testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

// testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

// testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

// testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false

// Fix this broken code!
// function checkEquals(arr1, arr2) {
//     if (arr1.toString() === arr2.toString()) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkEquals([1, 2], [1, 2]));

// checkEquals([1, 2], [1, 3]) ➞ false

// checkEquals([1, 2], [1, 2]) ➞ true

// checkEquals([4, 5, 6], [4, 5, 6]) ➞ true

// checkEquals([4, 7, 6], [4, 5, 6]) ➞ false
