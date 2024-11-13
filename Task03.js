'use strict';

function ranNumbers(count, m, n, parity ) {
    const result = [];
    const min = Math.min(n, m);
    const max = Math.max(n, m);
    while (result.length < count) {
        const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
        if (randomNum % 2 === 0 && parity ==='even') { 
          result.push(randomNum);
        } 
        if (randomNum % 2 !== 0 && parity ==='odd') {
          result.push(randomNum);
        } 
        if (parity === undefined) {
          result.push(randomNum);
        }  
          
    }

    return result;
}


console.log(ranNumbers(99, -10, 10, 'odd'));
