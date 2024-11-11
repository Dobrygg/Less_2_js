'use strict'

const runNum = Math.floor((Math.random() * 100) + 1);

function game(runNum) {
    let playerNum;
    do { 
        playerNum = prompt('Введите число');

        switch (runNum !== playerNum) {
            case playerNum === null:
                alert("Игра завершена.");
                return; 
            case isNaN(playerNum):
                alert('Введите число');
                break;
            case runNum > playerNum:
                alert('Загаданное число больше вашего');
                break;
            case runNum < playerNum:
                alert('Загаданное число меньше вашего');
                break;
            case runNum === Number(playerNum):
                alert(`Правильно`);
                return runNum; 
        }
        
    } while (runNum !== playerNum); 
}

console.log(game(runNum));