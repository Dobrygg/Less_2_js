'use strict';

const word = '  привет Мир'

function createWords(word) {
    const wordsTrim = word.trim();
    return wordsTrim.replace(/^./, wordsTrim[0].toUpperCase(), wordsTrim[1].toLowerCase);
}

console.log(createWords(word)); // Функция с заданными параметрами.