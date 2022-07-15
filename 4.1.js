// Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. That program must use the function you created.

//Write a documentation for the calcSurface function.

/**
 * @function calcSurface
 * 
 * @description
 * Return the surface of a rectangle.
 *  
 * @param {number} length
 * @param {number} width
 * 
 * @returns {number} The calculated surface.
 */
function calcSurface(length, width) {
    return length * width;
}

let length = 42;
let width = 64;

console.log(`surface from ${length} by ${width} = ${calcSurface(length, width)}`);