'use strict'

const arr = [1, 2, 3, 4, 5, 6];
let newArr = [...arr];

function creatArr(newArr) {
    let sumNumber = newArr.reduce(function (sum, num) {
        return sum + num
    }, 0);
    
    if (sumNumber < 50) {
        const randomNum = Math.floor((Math.random() * 10) + 1);
        newArr.push(randomNum);
        creatArr( newArr);
        return newArr;
    };

    return newArr;    
}


console.log(creatArr(newArr));