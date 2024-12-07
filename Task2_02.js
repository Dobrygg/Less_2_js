'use strict';

const cart = {
  items: [],
  count: 0,
  _discount: 0,
  METHED: "METHED",
  NEWYEAR: "NEWYEAR",
  calculateltemPrice() {
    let summer = this.items.reduce((sum, item) =>
      sum + item.price * item.quantity, 0);
    summer -= (summer * this._discount) / 100;
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

  methed(METHED) {
    if (cart._discount = "METHED") {
      this._discount = 15;
    };
  },

  newyear(NEWYEAR) {
    if (cart._discount = "NEWYEAR") {
      this._discount = 21;
    };
  }
};

cart.add('banan', 5, 0);
cart.add('mango', 4, 0);
cart.add('qiwi', 1, 10);
cart.print();
cart.newyear();
console.log(cart.totalPrice);

