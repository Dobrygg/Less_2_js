'use strict';


// const product = 'plate';
// const quantityProduct = '5';
// const category = 'kitchen utensils';
// const price = '200';

// console.log(product);
// console.log(quantityProduct * price +  " Цена заказа");

const product = prompt('Наименование товара');
const quantityProduct = prompt('Количество товара');
const category = prompt('Категория товара');
const price = prompt('Цена товара');




console.log(typeof +product);
console.log(typeof +quantityProduct);
console.log(typeof +category);
console.log(typeof +price);


console.log('На складе ' + quantityProduct + ' единицы товара ' + product + ' на сумму ' + price + ' рублей');