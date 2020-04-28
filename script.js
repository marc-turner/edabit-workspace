// const mauriceWins = (mSnails, sSnails) =>
//     mSnails[0] < sSnails[2] &&
//     mSnails[1] > sSnails[0] &&
//     mSnails[2] > sSnails[1];

// console.log(mauriceWins([3, 5, 10], [4, 7, 11]));
// console.log(mauriceWins([6, 8, 9], [7, 12, 14]));

// function chatroomStatus(users) {
//     return users.length === 1
//         ? `${users[0]} online`
//         : users.length === 2
//         ? `${users[0]} and ${users[1]} online`
//         : users.length > 2
//         ? `${users[0]}, ${users[1]} and ${users.length - 2} more online`
//         : 'no one online';
// }

// console.log(chatroomStatus([]));
// console.log(chatroomStatus(['paRIE_to']));
// console.log(chatroomStatus(['s234f', 'mailbox2']));
// console.log(
//     chatroomStatus([
//         'pap_ier44',
//         'townieBOY',
//         'panda321',
//         'motor_bike5',
//         'sandwichmaker833',
//         'violinist91',
//     ])
// );

// function reverseCase(str) {
//     return [...str]
//         .map((x) =>
//             x === x.toUpperCase()
//                 ? x.toLowerCase()
//                 : x === x.toLowerCase()
//                 ? x.toUpperCase()
//                 : x
//         )
//         .join('');
// }

// console.log(reverseCase('Happy Birthday'));

// const isSpecialArray = (arr) =>
//     arr.every(
//         (x, i) => (x % 2 === 0 && i % 2 === 0) || (x % 2 === 1 && i % 2 === 1)
//     );

// console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]));

// isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// Index 2 has an odd number 9.

// isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
// Index 3 has an even number 8.

// function indexShuffle(str) {
//     return (
//         [...str].filter((x, i) => i % 2 === 0).join('') +
//         [...str].filter((x, i) => i % 2 === 1).join('')
//     );
// }

// console.log(indexShuffle('abcdefg'));

// function isPrefix(word, prefix) {
//     return word.startsWith([...prefix].filter((x) => x !== '-').join(''));
// }

// function isSuffix(word, suffix) {
//     return word.endsWith([...suffix].filter((x) => x !== '-').join(''));
// }

// console.log(isSuffix('arachnophobia', '-phobia'));

// isPrefix("automation", "auto-") ➞ true

// isSuffix("arachnophobia", "-phobia") ➞ true

// isPrefix("retrospect", "sub-") ➞ false

// isSuffix("vocation", "-logy") ➞ false

// function asciiCapitalize(str) {
//     return str
//         .split('')
//         .map((x) =>
//             x.charCodeAt(0) % 2 === 0 ? x.toUpperCase() : x.toLowerCase()
//         )
//         .join('');
// }

// console.log(asciiCapitalize('to be or not to be!'));

// asciiCapitalize("to be or not to be!") ➞ "To Be oR NoT To Be!"

// asciiCapitalize("THE LITTLE MERMAID") ➞ "THe LiTTLe meRmaiD"

// asciiCapitalize("Oh what a beautiful morning.") ➞ "oH wHaT a BeauTiFuL moRNiNg."

// function spelling(str) {
//     let newArr = [];
//     for (let i = 1; i < str.length + 1; i++) {
//         let strPart = str.slice(0, i);
//         newArr.push(strPart);
//     }
//     return newArr;
// }

// console.log(spelling('eagerly'));

// spelling("bee") ➞ ["b", "be", "bee"]

// spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]

// spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]

// const findNemo = (sentence) =>
//     sentence.split(' ').includes('Nemo')
//         ? `I found Nemo at ${sentence.split(' ').indexOf('Nemo') + 1}!`
//         : "I can't find Nemo :(";

// console.log(findNemo('Is it Nemos, Nemona, Nemoor or Garfield?'));

// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

// findNemo("Nemo is me") ➞ "I found Nemo at 1!"

// findNemo("I Nemo am") ➞ "I found Nemo at 2!"

const capToFront = (s) =>
    s.match(/[A-Z]/g).join('').concat(s.match(/[a-z]/g).join(''));

console.log(capToFront('hApPy'));

// capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"
