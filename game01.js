'use strict'

function game() {
    const ranNum = Math.floor((Math.random() * 100) + 1);
    let answer;

    do { 
        answer = prompt('Введите число от 1 до 100');

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
            default:
                alert(`Правильно`);
        }
        
    } while (ranNum !== +answer && answer !== null); 

    return ranNum;
}

console.log(game());