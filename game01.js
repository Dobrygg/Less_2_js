'use strict'

function game() {
    const ranNum = Math.floor((Math.random() * 10) + 1);
    let answer = prompt('Введите число от 1 до 100'); 
    if (ranNum !== +answer && answer !== null) {
        switch (true) {
            case answer === null:
                alert("Игра завершена.");
                break;
            case isNaN(answer):
            case +answer > 100:
            case +answer < 1:
                alert('Нужно ввести число от 1 до 100');
                break;
            case ranNum > answer:
                alert('Загаданное число больше вашего');
                break;
            case ranNum < answer:
                alert('Загаданное число меньше вашего');
                break;
            };
            game (); 
        }
    if (ranNum === +answer) {
        alert(`Правильно ${ranNum}`);
    } 
    return ranNum;
};

game();
