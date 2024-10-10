'use strict';

let money = +prompt('Сколько вы зарабатываете');
if (money <= 15000) {
    console.log('Ваш подоходный налог = ' + (money / 100 ) * 13)
    } else if (money >= 15001 && money <= 50000) {
    console.log('Ваш подоходный налог = ' + ((money / 100 ) * 13 + ((money - 15000) / 100 * 20)))
    } else if (money >= 50001) {
    console.log('Ваш подоходный налог = ' + ((money / 100 ) * 13 + ((money - 50000) / 100 * 30)))
}