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

function letterAtPosition(n) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    return n > 0 && n % 1 === 0 ? alpha[n - 1].toLowerCase() : 'invalid';
}

console.log(letterAtPosition(4.5));

// letterAtPosition(1) ➞ "a"

// letterAtPosition(26.0) ➞ "z"

// letterAtPosition(0) ➞ "invalid"

// letterAtPosition(4.5) ➞ "invalid"
