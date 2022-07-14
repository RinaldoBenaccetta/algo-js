let min = prompt('Tell me your min number');
let max = prompt('Tell me your max number');
let current = prompt('Tell me your current message');

if ((current > min) && (current < max)) {
    console.log('current is between min and max')
} else if (min > max) {
    throw new Error('please, min shouldn\'t be higher than max. Thank you very much.');
}
