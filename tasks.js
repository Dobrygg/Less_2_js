'use strict';

const rain = Math.round(Math.random());

if (rain === 1){
    alert('Пошёл дождь. Возьмите зонт!')}
    else {
        alert('Дождя нет!')
}

let mathematics = +prompt('Введите кол-во баллов по математике:');
let language = +prompt('Введите кол-во баллов по русскому языку:');
let informatics = +prompt('Введите кол-во баллов по информатике:');

if (mathematics + language + informatics >= 265) {
    alert('Поздравляю, вы поступили на бюджет!')
} else {
    alert('Вы не поступили на бюджет!')
}

let money = +prompt('Сколько денег вы хотите снять?');
if (money <= 99) {
    console.log('Вы не можете снять сумму меньше 100 рублей')
} else if (money >= 100) {
    console.log((Math.floor(money / 100) * 100) + ' Вы можете снять наличными')
}



