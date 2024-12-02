'use strict'

const foo = function()  {
    const _rectangle = {
        _height: 5,
        _width: 5,
        
        setHeight(newHeight) {
            this._height = +newHeight;
        },
        
        setWeight(newWeight) {
            this._width = +newWeight;
        },
        
        get perimeter() {
            return 2 * (this._height + this._width) + ' см';
        },
        
        get square() {
            return this._height * this._width + ' см';
        }
    }
    return _rectangle;
};

const myRectangle = foo();
console.log(myRectangle);
console.log(myRectangle.setHeight(6));
console.log(myRectangle.perimeter);
console.log(myRectangle.square);
console.log();




