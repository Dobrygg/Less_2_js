'use strict';

const word = '  привЕт МИр';

function createWords(word) {
    const wordsTrim = word.trim();
    const line = wordsTrim[0].toUpperCase() + wordsTrim.slice(1).toLowerCase();
    let lineRev = '';
    for (let i = line.length; i >= 0; i -= 1) {
        lineRev += line[i];
    }
    return lineRev;

}

console.log(createWords(word));

//Без цикла
// function createWords(word) {
//     const wordsTrim = word.trim();
//     const line = wordsTrim[0].toUpperCase() + wordsTrim.slice(1).toLowerCase();
//     const lineRev = line.split("").reverse().join("");
//     return lineRev;
// }

// console.log(createWords(word));





