const seedrandom = require('seedrandom');
const rng = seedrandom('this_is_seed');

const randomAlphabetOrder = () => {
    let arrayCopy = [...Array(26 + 1).keys()].slice(1);

    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    return arrayCopy;
}

const randomConfig = () => {
    let config = [];

    for (let i = 0; i < 3; ++i) {
        config.push(randomAlphabetOrder());
    }

    return config;
}

const findPosition = (array, number) => {
    for (let i = 0; i < array.length; ++i) {
        if (array[i] === number) {
            return i;
        }
    }
}

module.exports = {
    randomAlphabetOrder,
    findPosition,
    randomConfig
}