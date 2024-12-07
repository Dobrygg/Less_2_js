'use strict'

const rectangle = {
    height: 5,
    width: 5,
    
    setHeight(newHeight) {
        this.height = +newHeight;
    },
    
    setWeight(newWeight) {
        this.width = +newWeight;
    },
    
    get perimeter() {
        return 2 * (this.height + this.width) + ' см';
    },
    
    get suare() {
        return (this.height * this.width) + ' см';
    }
};

rectangle.setHeight(7);
rectangle.setWeight(3);
console.log(rectangle.perimeter);
console.log(rectangle.suare);





