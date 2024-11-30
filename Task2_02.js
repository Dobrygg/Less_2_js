'use strict';

const cart = {
  METHED: 'METHED',
  NEWYEAR:'NEWYEAR',
  items: [],
  count: 0,
  totalPrice: 0,
  discount: 0,
  calculateltemPrice() {
    let totalPrice = this.items.reduce((sum, item) =>
      sum + item.price * item.quantity, 0);
    totalPrice -= (totalPrice * this.discount) / 100;
    return this.totalPrice = totalPrice;
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
    this.calculateltemPrice();
  }
};

cart.add('banan', 5, 0);
cart.add('mango', 4, 0);
cart.add('qiwi', 1, 100);
cart.print();
cart.setDiscount(cart.METHED);
console.log(cart.calculateltemPrice());

