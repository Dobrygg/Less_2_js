'use strict';

const allStudents = ["Иванов","Петров","Сидоров","Кузнецов","Смирнов", "Попов", "Соколов"];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

function filter(allStudents, failedStudents) {
    const result = [];
    for (let i = 0; i < allStudents.length; i += 1) {
        if (!failedStudents.includes(allStudents[i])) {
            result.push(allStudents[i]);
        }
    }
    
    return result;
}

console.log(filter(allStudents, failedStudents));








































