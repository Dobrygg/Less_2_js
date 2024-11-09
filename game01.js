'use strict'

const runNum = Math.floor((Math.random() * 100) + 1);

function game(runNum) {
    let playerNum;
    do { 
        playerNum = prompt('Введите число');
        if (playerNum === null) {
            alert("Игра завершена.");
            break;
        } else if (isNaN(playerNum)) {
            alert('Введите число')
        } else if (runNum > playerNum) {
            alert('Загаданное число больше вашего')
        } else if (runNum < playerNum) {
            alert('Загаданное число меньше вашего вашего')
        } else if (playerNum === null) {
            alert("Игра завершена.");
            break;
        }
        
    } while (runNum !== Number(playerNum)); 
    
    alert(`Правильно`)
    return runNum;   

}

console.log(game(runNum));