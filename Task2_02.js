'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,
  METHED: 'METHED',
  NEWYEAR:'NEWYEAR',
  calculateltemPrice() {
    let summer = this.items.reduce((sum, item) =>
      sum + item.price * item.quantity, 0);
    summer -= (summer * this.discount) / 100;
    return summer;
  },

  get totalPrice() {
    return this.calculateltemPrice();
  },

  add(name, price, quantity = 1) {
    const newItems = {
      name,
      price,
      quantity,
    };
    this.items.push(newItems);
    this.increaseCount(quantity);
  },

  increaseCount(num) {
    this.count += num;
  },

  clear() {
    this.items = [],
    this.discount = 0,
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
  },

  _discount(promocode) {
    if (promocode === "METHED") {
      this.discount = 15;
    };
    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    };
  }
};

cart.add('banan', 5, 2);
cart.add('mango', 4, 1);
cart.add('qiwi', 1, 10);
cart.print();

cart._discount(cart.NEWYEAR);
console.log(cart.totalPrice);

