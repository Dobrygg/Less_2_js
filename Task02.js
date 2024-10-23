'use strict';

const word = '  привЕт МИр';

function createWords(word) {
    const wordsTrim = word.trim();
    const wordsTrimToUpper = wordsTrim[0].toUpperCase();
    const wordsTrimToLower = wordsTrim.slice(1).toLowerCase();
    return wordsTrimToUpper + wordsTrimToLower;
}

console.log(createWords(word));



//Короткий вариант
// function createWords(word) {
//     const wordsTrim = word.trim();
//     return wordsTrim[0].toUpperCase() + wordsTrim.slice(1).toLowerCase()
// }

// console.log(createWords(word));