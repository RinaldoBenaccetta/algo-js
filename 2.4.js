let x = 1;

while (x <= 100) {
    if (x%2 === 0) {
       console.log(`${x} * 3 = ${x*3}`);
    } else {
        console.log(`${x} / 2 = ${x/2}`);
    }
    
    ++x
}



//Count from 1 to 100. For every even number display the result of their division by 2. For every odd number display the result of their multiplication by 3.