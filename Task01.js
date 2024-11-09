'use strict';

const count = 10;

function runNumbers(count) {
    const result = [];
    let i = 0;
    while (i < count) {
        i += 1;
        result[i] = Math.floor(Math.random() * 43);
    }
    
    return result;
}

console.log(runNumbers(count));



















// const runNumber = Math.floor((Math.random() + 1) * 10);
// console.log(runNumber);

// function runNumbers(runNumber) {
//     const runIndex = [];
//     for (let i = 0; i < runNumber; i += 1) {
//         runIndex[i] = i;
//     }
//     for (let n = 0; n < runNumber; n += 1) {
//         console.log(runIndex[n] = + Math.floor((Math.random() * 43)));
//     }
    
//     return runIndex;
// }

// runNumbers(runNumber);














// function number(runNum) {
//     let strike = prompt('Угадайте загаданное число');   
//     for (let i = 0; i > -1; i +=1) {
//         let strike = prompt('Угадайте загаданное число');
//         if (isNaN(strike)) {
//             alert('Введите число');
//         }
//         if (runNum > strike) {
//             alert('Загаданное число больше вашего');
//         }
//         if (runNum < strike) {
//             alert('Загаданное число меньше вашего');
//         }
        
//         if (runNum === strike) {
//             alert('Вы угадали число');
//         }
//     }

// }

// number(runNum);







































