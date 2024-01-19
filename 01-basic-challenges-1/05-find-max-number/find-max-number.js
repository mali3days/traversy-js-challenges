function findMaxNumber(numbers) {
    let max = -Infinity;

    for (let number of numbers) {
        if (number > max) max = number;
    }

    return max;
}

module.exports = findMaxNumber;
