'use strict';

const product = prompt('Наименование товара');
const quantityProduct = +prompt('Количество товара');
const category = prompt('Категория товара');
const price = +prompt('Цена товара');

console.log('На складе ' + quantityProduct + ' единицы товара ' + product + ' на сумму ' + price * +quantityProduct + ' рублей');

console.log(typeof product);
console.log(typeof quantityProduct);
console.log(typeof category);
console.log(typeof price);




