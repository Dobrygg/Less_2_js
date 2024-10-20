'use strict';



function getNumber (numberA, numberB) {
    sum2A = numberA / 2;
    sum2B = numberB / 2;
    if (sum2A === Number.isInteger(sum2A) && sum2B === Number.isInteger(sum2B)) {
        console.log((numberA / 2));
    } 
    if (numberA / 3 === Number.isInteger(numberA) && numberB / 3 === Number.isInteger(numberB)) {
        alert(numberA / 3);
    }
    if (numberA / 4 === Number.isInteger(numberA) && numberB / 4 === Number.isInteger(numberB)) {
        alert(numberA / 4);
    } 
    if (numberA / 5 === Number.isInteger(numberA) && numberB / 5 === Number.isInteger(numberB)) {
        alert(numberA / 5);
    } 
}

getNumber(4, 8);