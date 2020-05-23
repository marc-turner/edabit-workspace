function unrepeated(str) {
    return [...new Set(str)].join('');
}

console.log(unrepeated('hello'));

// unrepeated("hello")➞ "helo"

// unrepeated("aaaaa")➞ "a"

// unrepeated("WWE!!!") ➞ "WE!"

// unrepeated("call 911") ➞ "cal 91"
