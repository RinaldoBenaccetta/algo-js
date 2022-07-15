// Create a function pickLearner(inputAr, n) that takes 2 parameters.

//     inputAr : An array of learners (the one you created in exercise 3.0 for example)
//     n : A number, that should be greater than 0 and less than the length of inputAr

// The function should return an array of randomly selected learners.


/**
 * @function randomBetween
 * 
 * @description
 * Return a number between 0 and given number.
 * 0 is possible return.
 * given number is not possible return.
 * 
 * @param {integer} number
 * 
 * @returns {integer} 
 */
function randomBetween(number) {
    return parseInt(Math.random() * number);
}

/**
 * @function pickLearner
 * 
 * @description
 * Return a list of n items in a given array.
 * 
 * @param {array} inputAr An array to filter.
 * @param {number} n Number of desired items.
 * @returns 
 */
function pickLearner(inputAr, n) {
    // check if n is a valid number
    if (( n <= 0 ) || ( n > inputAr.length )) {
        throw new Error('n is not valid.');
    }

    let output = [];
    let index = 0;

    while (index < n) {
        // pick an item in array
        let poeple = inputAr[randomBetween(inputAr.length)];

        // if poeple is not already in output array : add it.
        if (!poeple.indexOf(poeple)) {
            output.push(poeple);
            index++;
        }
    }

    return output;
}

let peoples = [
    'Baudson Guillaume',
    'Benaccetta Rinaldo',
    'Blaevoet Benoit',
    'Brigode Xavier',
    'Charles xavier',
    'Corda Daniela',
    'Denis Anthony',
    'Devilers',
    'Elinckx Julien',
    'Friquet',
    'Gillard Sophie',
    'Kirac Axel',
    'Maddouri Hazem',
    'Maurcot',
    'Moraes	Kamilla',
    'Pécher	Stéphanie',
    'Scourneau Julien',
    'Vanvolcksom Doriano',
    'Vervoot Eddy',
    'Elyahyioui Selim',
    'Moussiaux Titouan',
    'Baudson Guillaume'
];

// console.log(pickLinear(peoples, -42));
// console.log(pickLinear(peoples, 42));
console.log(pickLearner(peoples, 5));