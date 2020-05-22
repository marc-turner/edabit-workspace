function validStrNumber(n) {
    return /[.?]/g.test(n);
}

console.log(validStrNumber('54..4'));

// validStrNumber("3.2") ➞ true

// validStrNumber("324") ➞ true

// validStrNumber("54..4") ➞ false

// validStrNumber("number") ➞ false
