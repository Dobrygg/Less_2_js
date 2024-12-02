'use strict';

const cart = {
  METHED: 'METHED',
  NEWYEAR:'NEWYEAR',
  items: [],
  count: 0,
  totalPrice: 0,
  discount: 0,

  calculateltemPrice() {
    this.items.reduce((sum, item) =>
      sum + item.price * item.quantity, 0);

  },

  getTotalPrice() {
    let total = this.items.reduce((sum, item) =>
      sum + item.price * item.quantity, 0);
    total -= (total * this.discount) / 100;
    return total;
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
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
    this.discount = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
  },

  setDiscount(promocode) {
    this.discount = 0;
    if (promocode === this.METHED) {
        this.discount = 15
    };
    if (promocode === this.NEWYEAR){
        this.discount = 21
    };
  }
};

cart.add('banan', 5, 0);
cart.add('mango', 4, 0);
cart.add('qiwi', 1, 100);
console.log(cart.calculateltemPrice());
console.log(cart.print());
console.log(cart.getTotalPrice());
cart.setDiscount(cart.METHED);
console.log(cart.getTotalPrice());
console.log(cart.print());
cart.total = 100;
console.log(cart.getTotalPrice());
console.log(cart.print());


