'use strict';

function ranNumbers(count, m, n, parity ) {
    const result = [];
    const rule = ['even', 'odd'].indexOf(parity);
    const min = Math.min(n, m);
    const max = Math.max(n, m) - (1 * rule !== -1);
    for (let i = 0; i < count; i += 1) {
        let randomNum = Math.floor(Math.random() * (max - min + 1) + min);

        if (rule !== -1 && Math.abs(randomNum % 2) !== rule) {

          randomNum++
        }
        result.push(randomNum);
    }
  
    return result;
}

console.log(ranNumbers(99, -10, 10, 'odd'));

































// function ranNumbers(count, m, n, parity ) {
//     const result = [];
//     const min = Math.min(n, m);
//     const max = Math.max(n, m);
//     while (result.length < count) {
//         const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
//         if (randomNum % 2 === 0 && parity ==='even') { 
//           result.push(randomNum);
//         } 
//         if (Math.abs(randomNum) % 2 === 1 && parity ==='odd') {
//           result.push(randomNum);
//         } 
//         if (parity === undefined) {
//           result.push(randomNum);
//         }  
          
//     }

//     return result;
// }


// console.log(ranNumbers(99, -10, 10, 'odd'));
