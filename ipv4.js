'use strict'

function getListIpv4(arr) {
    const newArr = new Set(arr);

    return newArr.size;
}

console.log(getListIpv4(arr));