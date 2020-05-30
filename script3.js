function linesAreParallel(l1, l2) {
    return l1[0] === l2[0] && l2[1] === l2[1];
}

console.log(linesAreParallel([0, 1, 5], [0, 1, 5]));

linesAreParallel([1, 2, 3], [1, 2, 4]) ➞ true
// x+2y=3 and x+2y=4 are parallel.

linesAreParallel([2, 4, 1], [4, 2, 1]) ➞ false
// 2x+4y=1 and 4x+2y=1 are not parallel.

linesAreParallel([0, 1, 5], [0, 1, 5]) ➞ true
// Lines are parallel to themselves.

// function formatNum(num) {
//     return String(num).length < 3 ? String(num) : 'more than 3';
// }

// console.log(formatNum(20));

// formatNum(1000) ➞ "1,000"

// formatNum(100000) ➞ "100,000"

// formatNum(20) ➞ "20"
