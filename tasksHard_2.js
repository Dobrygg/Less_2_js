'use strict';

const money = +prompt('Сколько вы зарабатываете');
let moneyRemains = money - 15000;
let moneyPercentMax = 8950;

if (money <= 15000) {
    console.log(`Ваш подоходный налог = ${(money * 0.13)}`);
} 

if (money <= 50000) {
    console.log(`Ваш подоходный налог = ${((money - moneyRemains) * 0.13) + (moneyRemains * 0.2)}`);
}

if (money > 50000) {
    console.log(`Ваш подоходный налог = ${(moneyPercentMax + ((money - 50000) * 0.3))}`);
}