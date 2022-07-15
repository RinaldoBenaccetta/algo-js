// Write a program that will display the minimum and maximum elements of a given array.

const myArray = [2, 3, 6, 5, 6];

//const myArray = [12, 42, 12, 0, 45];

//const myArray = [122, 4, 3, 3, 2];

let min = myArray[1];
let max = 0;

for (i = 0; i < myArray.length; i++) {
    let number = myArray[i];
    
    if (number < min) {
        min = number;
    } else if (number > max) {
        max = number
    }
    
}

console.log(`minimum = ${min} and maximum is ${max}`);