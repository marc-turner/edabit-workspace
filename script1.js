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

// function oneOddOneEven(n) {
//     return !(Math.floor(n / 10) % 2 === (n % 10) % 2);
// }

// console.log(oneOddOneEven(22));

// oneOddOneEven(12) ➞ true

// oneOddOneEven(55) ➞ false

// oneOddOneEven(22) ➞ false

// const totalVolume = (...boxes) =>
//     boxes.map((x) => x[0] * x[1] * x[2]).reduce((c, i) => c + i);

// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));

// totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) ➞ 63

// totalVolume([2, 2, 2], [2, 1, 1]) ➞ 10

// totalVolume([1, 1, 1]) ➞ 1

// function createPhoneNumber(numbers) {
//     return (
//         '(' +
//         numbers.slice(0, 3).join('') +
//         ') ' +
//         numbers.slice(3, 6).join('') +
//         '-' +
//         numbers.slice(6, 10).join('')
//     );
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

// createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) ➞ "(111) 111-1111"

// createPhoneNumber([8, 7, 4, 1, 2, 5, 6, 5, 8, 2]) ➞ "(874) 125-6582"

// function transformUpvotes(str) {
//     return str
//         .split(' ')
//         .map((x) => (x.includes('k') ? +x.slice(0, x.length - 1) * 1000 : +x));
// }

// console.log(transformUpvotes('5.5k 8.9k 32'));

// transformUpvotes("6.8k 13.5k") ➞ [6800, 13500]

// transformUpvotes("5.5k 8.9k 32") ➞ [5500, 8900, 32]

// transformUpvotes("20.3k 3.8k 7.7k 992") ➞ [20300, 3800, 7700, 992]

// function identicalFilter(arr) {
//     return arr.filter((x) => new Set(x).size === 1);
// }

// console.log(identicalFilter(['aaaaaa', 'bc', 'd', 'eeee', 'xyz']));

// identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"])
// ➞ ["aaaaaa", "d", "eeee"]

// identicalFilter(["88", "999", "22", "545", "133"])
// ➞ ["88", "999", "22"]

// identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"])
// ➞ []

// function factorChain(arr) {
//     arr.slice(1);
//     return arr;
// }

// console.log(factorChain([1, 2, 4, 8, 16, 32]));

// factorChain([1, 2, 4, 8, 16, 32]) ➞ true

// factorChain([1, 1, 1, 1, 1, 1]) ➞ true

// factorChain([2, 4, 6, 7, 12]) ➞ false

// factorChain([10, 1]) ➞ false

// const specialReverse = (s, c) =>
//     s
//         .split(' ')
//         .map((x) => (x.startsWith(c) ? x.split('').reverse().join('') : x))
//         .join(' ');

// console.log(specialReverse('first man to walk on the moon', 'm'));

// specialReverse("word searches are super fun", "s")
// ➞ "word sehcraes are repus fun"

// specialReverse("first man to walk on the moon", "m")
// ➞ "first nam to walk on the noom"

// specialReverse("peter piper picked pickled peppers", "p")
// ➞ "retep repip dekcip delkcip sreppep"

// const countTrue = (arr) => arr.filter((x) => x).length;

// console.log(countTrue([true, false, false, true, false]));

// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0
