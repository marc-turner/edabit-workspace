// function century(year) {
//     let suf = '';
//     if (year > 2000) {
//         suf = 'st';
//     } else {
//         suf = 'th';
//     }
//     // return year % 100 === 0 && year < 2001
//     //     ? `${year / 100}th century`
//     //     : `${(year / 100).toFixed()}${suf} century`;

//     return String(year / 100).split('.')[1] >= 1
//         ? `${+String(year / 100).split('.')[0] + 1}${suf} century`
//         : 'st';
// }

// console.log(century(1000));

// century(1756) ➞ "18th century"

// century(1555) ➞ "16th century"

// century(1000) ➞ "10th century"

// century(1001) ➞ "11th century"

// century(2005) ➞ "21st century"

// const cmsSelector = (arr, str) => arr.filter((x) => x.toLowerCase().includes(str));

// console.log(cmsSelector(['WordPress', 'Joomla', 'Drupal', 'Magento'], ''));

// cmsSelector(['WordPress', 'Joomla', 'Drupal' ], 'w') ➞ ['WordPress']

// cmsSelector(['WordPress', 'Joomla', 'Drupal', 'Magento' ], 'ru') ➞ ['Drupal']

// cmsSelector(['WordPress', 'Joomla', 'Drupal', 'Magento' ], '') ➞ ['Drupal', 'Joomla', 'Magento', 'WordPress']

// const equation = (s) => eval(s);

// console.log(equation('1+1'));

// equation("1+1") ➞ 2

// equation("7*4-2") ➞ 26

// equation("1+1+1+1+1") ➞ 5

// function returnEndOfNumber(num) {
//     return /[4-9]0/.test(String(num).split('').pop())? `${num}-TH` :
//     ? ;
// }

// console.log(returnEndOfNumber(34));

// returnEndOfNumber(553) ➞ "553-RD"

// returnEndOfNumber(34) ➞ "34-TH"

// returnEndOfNumber(1231) ➞ "1231-ST"

// returnEndOfNumber(22) ➞ "22-ND"

// function changeTypes(arr) {
//     let newArr = [];
//     let newStr = '';
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'string') {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(changeTypes(['a', 12, true]));

// changeTypes(["a", 12, true]) ➞ ["A!", 13, false]

// changeTypes([13, "13", "12", "twelve"]) ➞ [13, "13!", "12!", "Twelve!"]

// changeTypes([false, "false", "true"]) ➞ [true, "False!", "True!"]

// function tpChecker(home) {
//     let amountNeeded = home.people * 57 * 14;
//     let amountHave = home.tp * 500;
//     let tpSupplyLen = Math.floor(amountHave / (amountNeeded / 14));
//     if (amountNeeded > amountHave) {
//         return `Your TP will only last ${tpSupplyLen} days, buy more!`;
//     }
//     return `Your TP will last ${tpSupplyLen} days, no need to panic!`;
// }

// console.log(tpChecker({ people: 2, tp: 4 }));

// {people: 4, tp:1} ➞ "Your TP will only last 2 days, buy more!"

// {people: 3, tp:20} ➞ "Your TP will last 58 days, no need to panic!"
