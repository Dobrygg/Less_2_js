'use strict';

const money = +prompt('Сколько вы зарабатываете');
let rest = money;
let tax = 0;

if (rest > 50000) {
    rest = money - 50000
    tax = (rest * 0.3) + ((money - 15000 - rest) * 0.2) + ((money - 35000 - rest) * 0.13)
    console.log(`Ваш подоходный налог = ${tax}`);
} 

if (rest > 15000) {
    rest = money - 15000
    tax = (rest * 0.2) + ((money - rest)* 0.13) 
    console.log(`Ваш подоходный налог = ${tax}`);
}

if (rest > 0) {
    tax = rest * 0.13
    console.log(`Ваш подоходный налог = ${tax}`);
}

