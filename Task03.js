'use strict';

const word = '  Привет мир';

function createWords(word) {
    return word.trim().split("").reverse().join("");
}

console.log(createWords(word));








