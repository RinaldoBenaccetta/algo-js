// Create a function named rand10() that returns a random integer between 1 and 10. Create a program that will display the result of that function each time it is run.

// Write a documentation for the rand10() function.

// You will have to search on Google how to generate random numbers in JavaScript for this exercise.


/**
 * @function rand10
 * 
 * @description
 * Return a random number between 1 an 10.
 * Not 1, and no 10.
 * 
 * @returns {integer} a random number between 1 an 10
 */
function rand10() {
    let number = parseInt(Math.random()*10) + 1;

    if (number < 2) { // between 1...
        return 2;
    } else if (number > 9) { // and 10
        return 9;
    }
    return number;
}

console.log(rand10());

export default function Hello() {
    return rand10;
}