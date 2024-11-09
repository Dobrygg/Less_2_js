'use strict'

const runNum = Math.floor((Math.random() * 100) + 1);

function game(runNum) {
    let playerNum;
    do { 
    playerNum = prompt('Введите число');
    if (isNaN(playerNum)) {
            alert('Введите число')
        } else if (runNum > playerNum) {
            alert('Загаданное число больше вашего')
        } else if (runNum < playerNum) {
            alert('Загаданное число меньше вашего вашего')
        }
    } while (runNum !== Number(playerNum)); 
    
    return runNum;   

}

console.log(game(runNum));