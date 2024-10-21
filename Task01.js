'use strict';

function getMoney(euro) {
    const euroDollar = euro * 1.2;
    const dollRub = euroDollar * 73;
    return dollRub;
}

console.log (getMoney(2)); // Функция с заданными параметрами.