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

const isSpecialArray = (arr) =>
    arr.every(
        (x, i) => (x % 2 === 0 && i % 2 === 0) || (x % 2 === 1 && i % 2 === 1)
    );

console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]));

// isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// Index 2 has an odd number 9.

// isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
// Index 3 has an even number 8.
