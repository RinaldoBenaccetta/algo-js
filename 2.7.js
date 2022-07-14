// Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. At the end display the sum of all the numbers collected this way.

// Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.

let n = prompt('Give me a n number');
let response = 0;

console.log(n)

for (i = parseInt(n); i > 0; i--) {
    response += parseInt(prompt('Give me a new number'));
}

console.log(response);