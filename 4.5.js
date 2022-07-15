// Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. That function must return the distance between those two points.

// Examples results:

//     Point A = [1, 1], point B = [2, 2] => 1.41
//     Point A = [1, 1], point B = [3, 1] => 2
//     Point A = [4, 1], point B = [1, 1] => 3
//     Point A = [-2, 2], point B = [2, -2] => 5.65

// Create a program to use that function.

// Write a documentation for the calcDistance function.

// Note: You probably need to make some search on Google to learn the mathematical formula to do that. You will also probably need to search for useful functions in JavaScript to help you making complex mathematical formulas...

// racine (x2 - x1)² + (y2 - y1)²

/**
 * @function calcDistance
 * 
 * @description
 * Return distance between two points in 2D space.
 * 
 * @param {array} pointA 2D coordinates of first point.
 * @param {array} pointB 2D coordinates of second point.
 * 
 * @returns {float} The distance between the two given points.
 */
function calcDistance(pointA, pointB) {
    let x1 = pointA[0];
    let x2 = pointB[0];
    let y1 = pointA[1];
    let y2 = pointB[1];

    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}

console.log(calcDistance([1,1], [2,2]));
console.log(calcDistance([1,1], [3,1]));
console.log(calcDistance([4,1], [1,1]));
console.log(calcDistance([-2,2], [2,-2]));