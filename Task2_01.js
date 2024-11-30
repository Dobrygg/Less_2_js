'use strict'

const foo = function()  {
    const rectangle = {
        height: 5,
        weight: 5,
        setHeight(newHeight) {
            this.height = +newHeight;
        },
        setWeight(newWeight) {
            this.weight = +newWeight;
        },
        get perimeter() {
            return 2 * (this.height + this.weight) + ' см';
        },
        get square() {
            return this.height * this.weight + ' см';
        }
    }
    return rectangle;
};

const myRectangle = foo();
console.log(myRectangle);
console.log(myRectangle.setHeight(11));
console.log(myRectangle.perimeter);
console.log(myRectangle.square);
console.log(myRectangle);




