// Create a program that will re-use the Rectangle class you created previously. It should generate 1000 random instances of Rectangle with random positions and sizes. Then it will display all colliding rectangles amongst those that were generated that way.


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

const random = () => {
    return (parseInt(Math.random()*100) + 1);
}

const createRectangles = (quantity) => {
    let output = [];

    for (let i = 0; i < quantity; i++) {
        const newRectangle = new Rectangle(random(), random(), random(), random());
        output.push(newRectangle);
    }

    return output;
}

const collideAll = () => {
    let rectangleArray = createRectangles(1000);
    let rectangleArrayLength = rectangleArray.length - 1;
    //console.log(rectangleArray[2]);

    rectangleArray.forEach((currentRectangle, elementIndex) => {
        let i = 0;

        while (i <= rectangleArrayLength) {

            // Don't compare to itself
            if (elementIndex !== i) {
                console.log(currentRectangle.collides(rectangleArray[i]));
            }

            i++;
        }
    });
}

collideAll();