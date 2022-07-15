// Write a program that will calculate the average value of a given array.

//Test it with the following arrays:

//[1, 2, 3, 4, 5] => 3
//[100, 101, 102] => 101

const myArray = [1, 2, 3, 4, 5];

let sum = 0;

for (i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}

console.log(sum/myArray.length);
