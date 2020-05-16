// function anotherFunc() {
//     let str = 'bye';
//     setTimeout(() => {
//         callback(str);
//     }, 100);
// }

// var doc = 'hello';

// function callback(str) {
//     doc = str;
// }

// const bbqSkewers = (grill) => [
//     grill.length - grill.filter((x) => x.includes('x')).length,
//     grill.filter((x) => x.includes('x')).length,
// ];

// console.log(
//     bbqSkewers([
//         '--oooo-ooo--',
//         '--xx--x--xx--',
//         '--o---o--oo--',
//         '--xx--x--ox--',
//         '--xx--x--ox--',
//     ])
// );

// bbqSkewers( [
//     "--oooo-ooo--",
//     "--xx--x--xx--",
//     "--o---o--oo--",
//     "--xx--x--ox--",
//     "--xx--x--ox--"
//   ]) ➞ [2, 3]

//   bbqSkewers([
//     "--oooo-ooo--",
//     "--xxxxxxxx--",
//     "--o---",
//     "-o-----o---x--",
//     "--o---o-----"
//   ]) ➞ [3, 2]

// const coneVolume = (h, r) =>
//     r === 0 ? 0 : ((Math.PI * Math.pow(r, 2) * h) / 3).toFixed(2);

// console.log(coneVolume(15, 6));

// coneVolume(3, 2) ➞ 12.57

// coneVolume(15, 6) ➞ 565.49

// coneVolume(18, 0) ➞ 0
///////////////////////////////////////////////////////
// const reverseArr = (num) =>
//     String(num)
//         .split('')
//         .reverse()
//         .map((x) => +x);

// console.log(reverseArr(1485979));

// reverseArr(1485979) ➞ [9, 7, 9, 5, 8, 4, 1]

// reverseArr(623478) ➞ [8, 7, 4, 3, 2, 6]

// reverseArr(12345) ➞ [5, 4, 3, 2, 1]

// const reverseAndNot = (i) => +[...String(i)]
//         .reverse()
//         .concat([...String(i)])
//         .join('');

// console.log(reverseAndNot(123));

// reverseAndNot(123) ➞ 321123

// ReverseAndNot(152) ➞ 251152

// reverseAndNot(123456789) ➞ 987654321123456789

// const inBox = (arr) =>
//     arr.filter(
//         (x) => x.includes('*') && (x.indexOf('*') !== 0 || !x.endsWith('*'))
//     ).length >= 1;

// console.log(inBox(['###', '#*#', '###']));

// inBox([
//     "###",
//     "#*#",
//     "###"
//   ]) ➞ true

//   inBox([
//     "####",
//     "#* #",
//     "#  #",
//     "####"
//   ]) ➞ true

//   inBox([
//     "*####",
//     "# #",
//     "#  #*",
//     "####"
//   ]) ➞ false

//   inBox([
//     "#####",
//     "#   #",
//     "#   #",
//     "#   #",
//     "#####"
//   ]) ➞ false
