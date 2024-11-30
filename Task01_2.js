'use strict'

const arr = [1, 2, 3, 4, 5, 6];
function creatArr(arr) {
    const randomNum = Math.floor((Math.random() * 10) + 1);
    arr.push(randomNum);
    const sumNumber = arr.reduce(function (sum, num) {
        return sum + num
    }, 0);
    if (sumNumber < 50) {
        creatArr(arr)
    };
    return arr;
};