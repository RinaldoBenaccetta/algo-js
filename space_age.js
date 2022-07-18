// Given an age in seconds, calculate how old someone would be on

//     Mercury: orbital period 0.2408467 Earth years
//     Venus: orbital period 0.61519726 Earth years
//     Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
//     Mars: orbital period 1.8808158 Earth years
//     Jupiter: orbital period 11.862615 Earth years

// So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31.69 Earth-years old.
// The task

// Create a function space age that takes two arguments, a number of seconds and a planet that can either be : Mercury, Venus, Earth, Mars or Jupiter. The function should return your space age on that planet.

// spaceAge(365.25 * 24 * 60 * 60, 'Earth') // returns 1


const spaceAge = (planet, seconds) => {
    const planets = {
        'Mercury' : .2408467,
        'Venus' : .61519726,
        'Earth' : 1,
        'Mars' : 1.8808158,
        'Jupiter' : 11.862615
    }

    let days = seconds / (365.25 * 24 * 60 * 60);

    return days * planets[planet];
}

console.log(spaceAge('Mercury', 1000000000));
console.log(spaceAge('Venus', 1000000000));
console.log(spaceAge('Earth', 1000000000));
console.log(spaceAge('Mars', 1000000000));
console.log(spaceAge('Jupiter', 1000000000));