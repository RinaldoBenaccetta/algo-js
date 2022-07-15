// Create a function factorial(a) that returns the factorial of a number.

// That function must be recursive.

// factorial(4) = 4×3×2×1


/**
 * @function factorial
 * 
 * @description
 * Return factorial of a given number
 * 
 * @param {number} number
 * 
 * @returns The factorial of given number
 */
const factorial = (number) => {
    while (number > 0) {
        return number * factorial(number - 1) 
    }
    return 1
  }

console.log(factorial(4));