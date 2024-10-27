'use strict'; 

const number = 23;

function isPrime(number) {
    const even = number / 2;
    const odd = number / 3;
    const five = number / 5;
    const seven = number / 7;
    if (number < 0) {
        return console.log(false);
    }
    if (number === 1 || number === 2 || number === 3 || number === 5) {
        return isPrime();
    }   else {
        return console.log(even !== parseInt(even) && odd !== parseInt(odd) && five !== parseInt(five) && seven !== parseInt(seven));
    }
}

isPrime(number);






