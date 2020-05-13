// const rev = (n) => Math.abs(n).toString().split('').reverse().join('');

// console.log(rev(-122157));

// rev(5121) ➞ "1215"

// rev(69) ➞ "96"

// rev(-122157) ➞ "751221"

const getDistance = (a, b) =>
    typeof +Math.hypot(a.x - b.x, a.y - b.y).toFixed(3);

console.log(getDistance({ x: 10, y: -5 }, { x: 8, y: 16 }));

// getDistance({x: -2, y: 1}, {x: 4, y: 3}) ➞ 6.325

// getDistance({x: 0, y: 0}, {x: 1, y: 1}) ➞ 1.414

// getDistance({x: 10, y: -5}, {x: 8, y: 16}) ➞ 21.095
