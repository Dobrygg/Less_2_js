'use strict';

const product = prompt('Наименование товара');
const quantityProduct = prompt('Количество товара');
const category = prompt('Категория товара');
const price = prompt('Цена товара');

console.log(typeof product);
console.log(typeof quantityProduct);
console.log(typeof category);
console.log(typeof price);

const quantityProductNumber = Number.parseFloat(quantityProduct);
const priceNumber = Number.parseFloat(price);

console.log('На складе ' + quantityProductNumber + ' единицы товара ' + product + ' на сумму ' + priceNumber + ' рублей');


