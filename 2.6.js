// Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)

const weekDays = {
    '1' : 'Monday',
    '2' : 'tuesday',
    '3' : 'Wednesday',
    '4' : 'Thursday',
    '5' : 'Friday',
    '6' : 'Saturday',
    '7' : 'sunday'
}

let day = prompt('Give me a number between 1 and 7')

console.log(weekDays[day]);