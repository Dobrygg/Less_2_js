'use strict';

const money = +prompt('Сколько вы зарабатываете');
let rest = 0;
let tax = 0;

if (money >= 50000) {
    rest = money - 50000;
    tax = (rest * 0.3)  + ((money - rest) - 15000) * 0.2 + ((money - rest) - 35000) * 0.13;
} 

if (money >= 15000) {
    rest = money - 15000;
    tax = (rest * 0.2) + ((money - rest) * 0.13);
}

if (money < 15000 && money > 0) {
    tax = money * 0.13;
    
}
console.log(`Ваш подоходный налог = ${tax}`)

