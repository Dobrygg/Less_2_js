'use strict';

const word = '  Привет мир';

function createWords(word) {
    const lineRev = word.trim().split("").reverse().join("");
    return lineRev;
}

console.log(createWords(word));








