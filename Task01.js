'use strict';

function getMoney(euro) {
    const euroDollar = euro * 1.2;
    const dollRub = euroDollar * 73;
    return dollRub;
}

getMoney (2);