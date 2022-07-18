// Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and length. Add a method named collides(otherRectangle) that returns true only if the current rectangle collides with otherRectangle.

// Test the collides(otherRectangle) method by using multiple test cases.

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this._topLeftXPos = topLeftXPos;
        this._topLeftYPos = topLeftYPos;
        this._width = width;
        this._length = length;
    }

    get topLeftXPos() {
        return this._topLeftXPos;
    }

    get topLeftYPos() {
        return this._topLeftYPos;
    }

    get width() {
        return this._width;
    }

    get length() {
        return this._length;
    }

    collides(otherRectangle) {
        return (
            this._topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
            this._topLeftXPos + this._width > otherRectangle.topLeftXPos &&
            this._topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
            this._topLeftYPos + this._length > otherRectangle.topLeftYPos)
        }
}

const rectangleA = new Rectangle(1, 1, 3, 3);
const rectangleB = new Rectangle(1, 4, 3, 3);// should not collide
const rectangleC = new Rectangle(1, 2, 3, 3);// should collide
const rectangleD = new Rectangle(3, 1, 3, 3);// should collide
const rectangleE = new Rectangle(4, 1, 3, 3);// should not collide

console.log(rectangleA.collides(rectangleB));// should not collide
console.log(rectangleA.collides(rectangleC));// should collide
console.log(rectangleA.collides(rectangleD));// should collide
console.log(rectangleA.collides(rectangleE));// should not collide