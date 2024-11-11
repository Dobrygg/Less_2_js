'use strict';

function runNumbers(count, m, n) {
    let resultMass = [];
    const numsEven = [];
    const numsOdd = [];
    const result = [];
    const range = Math.abs(m - n) + 1;
    const min = Math.min(n, m);
    const max = Math.max(n, m);
    let i = 0;
    while (i < count) {
        i += 1;
        result[i] = Math.floor((Math.random() * range) + min);
        if (result[i] % 2 === 0) { 
            numsEven.push(result[i]); 
        } else { 
            numsOdd.push(result[i]); 
        }
    }
    
    return resultMass = ["even:", ...numsEven, "odd:", ...numsOdd];

}

console.log(runNumbers(7, 10, 22));
