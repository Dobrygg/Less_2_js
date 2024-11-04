'use strict';

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

function addPrefix(names) {
    const newNames = [];

    for (let i = 0; i < names.length; i +=1) {
        newNames[i] = (`Mr ${names[i]}`);
    }

    return newNames;
}
console.log(addPrefix(names));

