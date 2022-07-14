// Write a program that will add all the elements of an array.

//Test it with the following arrays:

//[1, 2, 3, 4, 5] => 15
//[100, 101, 102] => 303


//const myArray = [1, 2, 3, 4, 5];
const myArray = [100, 101, 102];

let sum = 0;

for (i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}

console.log(sum);