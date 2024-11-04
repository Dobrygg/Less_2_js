'use strict';

const allStudents = ["Иванов","Петров","Сидоров","Кузнецов","Смирнов", "Попов", "Соколов"];
const failedStudents = [];

function filter(allStudents, failedStudents) {
    const cloneAllStudent = [...allStudents];
    const failedStudentsOne = cloneAllStudent.slice(2,3);
    const failedStudentsTwo = cloneAllStudent.slice(4,6);
    failedStudents = [...failedStudentsOne, ...failedStudentsTwo];
    return failedStudents;
}

console.log(filter(allStudents, failedStudents));







































let array = ['один', 22, 'три', 'четыре', 'черепаха', 'доб', 'арра'];

let arr = ['один', 'два', 'три', 'четыре'];
// console.log(arr);
// arr.push(2);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(3);
// console.log(arr);
// arr.shift();
// console.log(arr);

// function printArr(arr) {
//     console.log(`Размер массива: ${arr.length}`);
//     for (let i = 0; i < arr.length; i += 1) {
//         const elem = arr[i];
//         console.log(`Элемент под индексом ${i} - ${elem}`);
//     }
    
//     for (const key in arr) {
//         console.log(`Элемент под индексом ${key} - ${arr[key]}`);
//     }

//     for (const elem of arr) {
//         console.log(`Элемент ${elem}`)
//     }
// } 

// printArr(array);


