'use strict';

function createWords () {
    const words = prompt('Введите слово' + '');
    console.log(words[0].toUpperCase() + words.slice(1));
}

createWords ();