'use strict';
{
    const rain = Math.round(Math.random());

    if (rain === 1) {
        alert('Пошёл дождь. Возьмите зонт!');
        } else {
        alert('Дождя нет!');
    }
}

{
    const mathematics = +prompt('Введите кол-во баллов по математике:');
    const language = +prompt('Введите кол-во баллов по русскому языку:');
    const informatics = +prompt('Введите кол-во баллов по информатике:');

    if (mathematics + language + informatics >= 265) {
        alert('Поздравляю, вы поступили на бюджет!');
    }   else {
        alert('Вы не поступили на бюджет!');
    }
}

{
    let money = +prompt('Сколько денег вы хотите снять?');

    if (money % 100 === 0) {
    } else {
        console.log(`Введите сумму кратную 100`);
    }
}


