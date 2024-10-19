'use strict';

function createWords () {
    const words = prompt('Введите слово' + '');
    const wordsTrim = words.trim();
    alert(wordsTrim.replace(/^./, wordsTrim[0].toUpperCase()));
}

createWords ();