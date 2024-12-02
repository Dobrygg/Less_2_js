'use strict'

const ranNum = Math.floor((Math.random() * 100) + 1);

function game(ranNum) {
    const answer = prompt('Введите число от 1 до 100'); 
    {
        switch (true) {
            case answer === null:
                alert("Игра завершена.");
                return; 
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
                alert(`Правильно ${ranNum}`);
                return;
        }
            game(ranNum); 
        
        };
    return ranNum;
};

game(ranNum);



