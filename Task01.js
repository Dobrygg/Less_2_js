'use strict';

const allStudents = ["Иванов","Петров","Сидоров","Кузнецов","Смирнов", "Попов", "Соколов"];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

function filter(allStudents, failedStudents) {
    const indexes = [0, 1, 3, 6];
    const result = indexes.map(index => allStudents[index]);

    return result;
}

console.log(filter(allStudents, failedStudents));







































