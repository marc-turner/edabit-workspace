// function footballPoints(wins, draws, losses) {
//     return wins * 3 + draws;
// }

// console.log(footballPoints(3, 4, 2));

// footballPoints(3, 4, 2) ➞ 13

// footballPoints(5, 0, 2) ➞ 15

// footballPoints(0, 0, 1) ➞ 0

// var result = ""

// let promise = new Promise((resolve, rej) => {
//     setTimeout(() => {
//         resolve(result="success!");
//     },1000)
// }).then(data => {
//     console.log(data);
// })

// function matchLastItem(arr) {
//     return arr.slice(0, arr.length - 1).join('') === arr.pop();
// }

// console.log(matchLastItem([8, 'thunder', true, '8thundertrue']));

// matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
// // The last item is the rest joined.

// matchLastItem([1, 1, 1, "11"]) ➞ false
// // The last item should be "111".

// matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true

// Find how many tabs with one literal whitespace immediately following the tab are in a string.

// function makeTitle(str) {
//     return str.split(' ').map((x) => x[0].toUpperCase() + x.slice(1));
// }

// console.log(makeTitle('PIZZA PIZZA PIZZA'));

// makeTitle("This is a title") ➞ "This Is A Title"

// makeTitle("capitalize every word") ➞ "Capitalize Every Word"

// makeTitle("I Like Pizza") ➞ "I Like Pizza"

// makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"

// function checkSquareAndCube(arr) {
//     return Math.sqrt(arr[0]) === Math.cbrt(arr[1]);
// }

// console.log(checkSquareAndCube([16, 48]));

// checkSquareAndCube([4, 8]) ➞ true

// checkSquareAndCube([16, 48]) ➞ false

// checkSquareAndCube([9, 27]) ➞ true

// function getFillings(sandwich) {
//     return sandwich.slice(1, sandwich.length - 1);
// }

// console.log(getFillings(['bread', 'ham', 'cheese', 'ham', 'bread']));

// getFillings(["bread", "ham", "cheese", "ham", "bread"]) ➞ ["ham", "cheese", "ham"]

// getFillings(["bread", "sausage", "tomato", "bread"]) ➞ ["sausage", "tomato"]

// getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]) ➞ ["lettuce", "bacon", "tomato"]

// function rps(p1, p2) {
//     if (p1 === p2) {
//         return "It's a draw";
//     }
//     if (p1 === 'Rock') {
//         if (p2 === 'Paper') {
//             return 'The winner is p2';
//         }
//     }
//     if (p1 === 'Paper') {
//         if (p2 === 'Scissors') {
//             return 'The winner is p2';
//         }
//     }
//     if (p1 === 'Scissors') {
//         if (p2 === 'Rock') {
//             return 'The winner is p2';
//         }
//     }
//     return 'The winner is p1';
// }

// console.log(rps('Paper', 'Paper'));

// rps("Rock", "Paper") ➞ "The winner is p2"

// rps("Scissors", "Paper") ➞ "The winner is p1"

// rps("Paper", "Paper") ➞ "It's a draw"

// function multiplyNums(nums) {
//     return nums
//         .replace(/[,]/g, '')
//         .split(' ')
//         .reduce((a, c) => a * c);
// }

// console.log(multiplyNums('10, -2'));

// multiplyNums("2, 3") ➞ 6

// multiplyNums("1, 2, 3, 4") ➞ 24

// multiplyNums("54, 75, 453, 0") ➞ 0

// multiplyNums("10, -2") ➞ -20

// function addNums(nums) {
//     return nums
//         .split(', ')
//         .map((x) => +x)
//         .reduce((a, c) => a + c);
// }

// console.log(addNums('2, 5, 1, 8, 4'));

// addNums("2, 5, 1, 8, 4") ➞ 20

// addNums("1, 2, 3, 4, 5, 6, 7") ➞ 28

// addNums("10") ➞ 10
