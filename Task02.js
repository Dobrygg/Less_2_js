'use strict'; 

const count = 20;

function runNumbers(count, m, n) {
    const result = [];
    const range = Math.abs(m - n) + 1;
    const min = Math.min(n, m);
    const max = Math.max(n, m);
    let i = 0;
    while ( i < count) {
        i += 1;
        result[i] = Math.floor((Math.random() * range) + min);
    }
    
    return result;
}

console.log(runNumbers(count, 20, 30));











