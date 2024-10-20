'use strict';

let word = '  привет мир'

function createWords (  word) {
    const wordsTrim = word.trim();
    return wordsTrim.replace(/^./, wordsTrim[0].toUpperCase());
}

createWords( word);