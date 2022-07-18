// Create a class named Circle with attributes xPos, yPos and radius. Add a method named move(xOffset, yOffset) that will adjust the position of the circle. Add a getter accessor named surface that will return the surface of the circle.

// Test its method and accessors by modifying the values and checking if everything is consistent.


class Circle {

    constructor(xPos, yPos, radius) {
        this._xPos = xPos;
        this._yPos = yPos;
        this._radius = radius;
    } 

    get xPos() {
        return this._xPos;
    }

    get yPos() {
        return this._yPos;
    }

    move(xOffset, yOffset) {
        this._xPos = xOffset;
        this._yPos = yOffset;
    }

    get surface() {
        return (Math.PI * (Math.pow(this._radius, 2)));
    }
}

const test1 = new Circle(1, 2, 3);
console.log(`surface is ${test1.surface}`);
console.log(`X is ${test1.xPos}`);
console.log(`Y is ${test1.yPos}`);

test1.move(3, 8);
console.log(`X is now ${test1.xPos}`);
console.log(`Y is now ${test1.yPos}`);