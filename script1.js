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

const coneVolume = (h, r) =>
    r === 0 ? 0 : ((Math.PI * Math.pow(r, 2) * h) / 3).toFixed(2);

console.log(coneVolume(15, 6));

// coneVolume(3, 2) ➞ 12.57

// coneVolume(15, 6) ➞ 565.49

// coneVolume(18, 0) ➞ 0
