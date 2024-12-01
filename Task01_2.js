'use strict'

const arr = [1, 2, 3, 4, 5, 6];

function creatArr(arr) {
    const newArr = [...arr];
    const sumNumber = newArr.reduce(function (sum, num) {
        return sum + num
    }, 0);
    console.log(sumNumber)
    {
        if (sumNumber < 50) {
            const randomNum = Math.floor((Math.random() * 10) + 1);
            newArr.push(randomNum);
            console.log(newArr);
            
        };
        creatArr();
    }
    
    
    // return newArr;
};

// creatArr(arr);