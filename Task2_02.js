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
    this.discount = 0;
    if (promocode === 'METHED') {
      this.discount = 15;
    };
    if (promocode === 'NEWYEAR'){
      this.discount = 21;
    }
  }
};

cart.add('banan', 5, 2);
cart.add('mango', 4, 1);
cart.add('qiwi', 1, 10);
cart.print();

console.log(cart.totalPrice);
cart._discount(cart.METHED);
console.log(cart.totalPrice);






















// const cart = {
//   METHED: 'METHED',
//   NEWYEAR:'NEWYEAR',
//   items: [],
//   count: 0,
//   discount: 0,

//   calculateltemPrice() {
//     let total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     total -= (total * this._discount) / 100;
//     // this.setTotalPrice(total);
//     },

// //     setTotalPrice(value){
// //       this._totalPrice = value;
// // }, 
//   get totalPrice(){
//     return this.items;
    
//   },

//   // getTotalPrice() {
//   //   let total = this.items.reduce((sum, item) =>
//   //     sum + item.price * item.quantity, 0);
//   //   total -= (total * this.discount) / 100;
//   //   return total;
//   // },

//   add(name, price, quantity = 1) {
//     const newItems = {
//       name,
//       price,
//       quantity,
//     };
//     this.items.push(newItems);
//     this.increaseCount(quantity);
//   },

//   increaseCount(num) {
//     this.count += num;
//   },

//   clear() {
//     this.items = [];
//     // this.totalPrice = 0;
//     this.count = 0;
//     this.discount = 0;
//   },

//   print() {
//     console.log(JSON.stringify(this.items));
//   },

//   _discount(promocode) {
//     this.discount = 0;
//     if (promocode === this.METHED) {
//       this._totalPrice -= (this._totalPrice * 15) / 100;
//     };
//     if (promocode === this.NEWYEAR){
//       this._totalPrice -= (this._totalPrice * 21) / 100;
//     };
//   }
// };

// cart.add('banan', 5, 2);
// cart.add('mango', 4, 1);
// cart.add('qiwi', 1, 100);
// console.log(cart.calculateltemPrice());
// cart.print();
// console.log(cart.calculateltemPrice());
// console.log(cart.print());
// console.log(cart.totalPrice());
// cart._discount(cart.METHED);
// console.log(cart.totalPrice());
// console.log(cart.print());
// cart.total = 100;
// console.log(cart.totalPrice());
// console.log(cart.calculateltemPrice());
// console.log(cart.print());


