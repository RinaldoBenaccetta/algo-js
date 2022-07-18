// Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise and return a list of the same cast but in a random order.

// Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.


/**
 * @function askCastMembers
 * 
 * @description
 * Prompt for a name.
 * If response is not empty, ask again.
 * If response is empty, stop to ask and return an array with the responses.
 * 
 * @param {array} [output] An array to add names.
 * @returns {array} An array with the responses given by the user
 */
 const askCastMembers = (output = []) => {
    let response = prompt("Give me a cast member. Or nothing to end the casting.");

    if (response.length > 0) {
        output.push(response);
        askCastMembers(output);  
    }

    return output;
}

/**
 * @function askTvSerie
 * 
 * @description
 * Ask name of favorite TV show, production year of this TV show,
 * and cast members of the TV show.
 * Return an object with the responses of the user.
 * 
 * @typedef {Object} TVShow
 * @property {string} name The name of the show
 * @property {string} productionYear the production year of the show
 * @property {array} cast The cast of the show
 * 
 * @returns {TVShow}
 */

// https://stackoverflow.com/questions/28763257/jsdoc-return-object-structure
// https://jsdoc.app/tags-typedef.html
// two links to help making doc
const askTvSerie = () => {
    let name = prompt("What's the name of your favorite TV show?");
    let prodYear = prompt("What's the production year of this show?");
    let cast = askCastMembers();

    return {
        'name' : name,
        'productionYear' : prodYear,
        'cast' : cast
    };
}


/**
 * @function randomizeCast
 * 
 * @description
 * Randomize the array 'cast' of the object tvSerie.
 * 
 * @param {object} tvSerie The TV serie object 
 * @returns {array} An array with randomized cast
 */
const randomizeCast = (tvSerie) => {
    let castMembers = tvSerie.cast;

    return castMembers.sort(() => Math.random() - .5);
}

// for testinc randomizeCast
let tvSerie = {
    name : "test serie",
    productionYear : "2015",
    cast : [
        'chose',
        'truc',
        'machin'
    ]
}

//console.log(randomizeCast(tvSerie));
console.log(randomizeCast(askTvSerie()));