// Write a program that will create a duplicate of a given array.

// Bonus: make a first version that will only do it using push(). Make a second version that uses a single method call to perform the copy. (You'll have to search on MDN or Google for this one.)

const myArray = [1, 2, 3, 4, 5];

let newArray = [];

for (i = 0; i < myArray.length; i++) {
    newArray.push(myArray[i]);
}

console.log(newArray);

// other method

const myOtheArray = [6, 7, 8, 9, 10];

const myNewOtherArray = [...myOtheArray];

console.log(myNewOtherArray);

// another

const myThirdArray = [11, 12, 13, 14, 15];

const cloneArray = myThirdArray.slice();

console.log(cloneArray);
