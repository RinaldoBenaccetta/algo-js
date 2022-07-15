// By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.

// Write a documentation for the multiRand(n) function.

// Use that function to create a program that will ask the number of random numbers to generate then display that same number of random numbers.

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


/**
 * @function multiRand
 * 
 * @description
 * Return an array of random numbers.
 * 
 * @param {integer} arrayLength The number of item in returned array.
 *  
 * @returns {array} An array with random numbers, wich length is arrayLength
 */
function multiRand(arrayLength) {
    let index = 0;
    let output = [];
    while (index < arrayLength) {
        output.push(rand10());
        index++
    }

    return output;
}

console.log(multiRand(12));