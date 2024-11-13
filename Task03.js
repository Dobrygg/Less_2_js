'use strict';

function runNumbers(count, m, n, parity ) {
    const even = [];
    const odd = [];
    const result = [];
    const min = Math.min(n, m);
    const max = Math.max(n, m);
    while (result.length < count) {
      result.length++;
        const randomNum = Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1) + min);
        console.log(randomNum);
        if (randomNum % 2 === 0 && parity ==='even') { 
          result.push(randomNum);
        } 
        if (randomNum % 2 === 1 && parity ==='odd') {
          result.push(randomNum);
        } 
        if (parity === undefined) {
          result.push(randomNum);
        }  
          
      }


      return result;
}


console.log(runNumbers(7, -5, 6, 'even'));
