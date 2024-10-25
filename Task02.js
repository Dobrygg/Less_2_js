'use strict';

{
    const number = 111;
    const even = number / 2;
    const odd = number / 3;

    function isPrime(number) {
        if (number < 0) {
            return console.log(false);
        }
        for (let i = 1; i < 3; i++) {
            if (even !== parseInt(even) && odd !== parseInt(odd)) {
                return console.log(true);
            }   else {
                return console.log(false); break;
            } 
        }
        return console.log(isPrime(number));
    }

    isPrime(number); 
} 



//Сделал код без цикла!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

{
    const number = 6;

    function isPrime(number) {
        const even = number / 2;
        const odd = number / 3;
        if (number < 0) {
            return console.log(false);
        }
        if (number === 1 || number === 2 || number === 3) {
            return console.log('true');
        }   else {
            return console.log(even !== parseInt(even) && odd !== parseInt(odd));
        }
        return console.log(isPrime(number));
    }

    isPrime(number);
}
