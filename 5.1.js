// Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

//     Name
//     Production year
//     Names of the cast members (there can be as much as the user want)

// That function must gather all the data in a single object and return it. The data structure must be elegant.

// Create a program that use that function to generate a TV serie object and display it to the user in JSON format.

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

let test = askTvSerie();

console.log(test);