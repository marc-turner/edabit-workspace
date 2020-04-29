console.log('CONNNECTED');

// const detectBrowser = (userAgent) =>
//     userAgent.includes('Chrome')
//         ? 'Google Chrome'
//         : userAgent.includes('Firefox')
//         ? 'Mozilla Firefox'
//         : 'Internet Explorer';

// console.log(
//     detectBrowser(
//         'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko'
//     )
// );

// detectBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36") ➞ "Google Chrome"

// detectBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0") ➞ "Mozilla Firefox"

// detectBrowser("Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko") ➞ "Internet Explorer"

// function boomIntensity(n) {
//     let boom = 'b' + 'o'.repeat(n) + 'm';
//     return n < 2
//         ? boom
//         : n % 2 === 0 && n % 5 === 0
//         ? (boom + '!').toUpperCase()
//         : n % 2 === 0 && n % 5 !== 0
//         ? boom + '!'
//         : n % 2 !== 0 && n % 5 === 0
//         ? boom.toUpperCase()
//         : boom;
// }

// console.log(boomIntensity(8));

// boomIntensity(4) ➞ "Boooom!"
// // There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)

// boomIntensity(1) ➞ "boom"
// // 1 is lower than 2, so we return "boom"

// boomIntensity(5) ➞ "BOOOOOM"
// // There are 5 "o"s and 5 is divisible by 5 (all caps)

// boomIntensity(10) ➞ "BOOOOOOOOOOM!"
// // There are 10 "o"s and 10 is divisible by 2 and 5 (all caps and exclamation mark included)

// 'b' + 'o'.repeat(n) + 'm';

function oneOddOneEven(n) {
    return !(Math.floor(n / 10) % 2 === (n % 10) % 2);
}

console.log(oneOddOneEven(22));

// oneOddOneEven(12) ➞ true

// oneOddOneEven(55) ➞ false

// oneOddOneEven(22) ➞ false
