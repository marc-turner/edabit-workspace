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
