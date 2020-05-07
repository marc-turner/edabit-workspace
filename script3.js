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

const longBurp = (num) => 'Bu' + 'r'.repeat(num) + 'p';

console.log(longBurp(5));

// longBurp(3) ➞ "Burrrp"

// longBurp(5) ➞ "Burrrrrp"

// longBurp(9) ➞ "Burrrrrrrrrp"
