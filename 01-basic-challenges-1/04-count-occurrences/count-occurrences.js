function countOccurrences(str, char) {
    let counter = 0;

    for (let c of str) {
        if (c === char) counter++;
    }

    return counter;
}

module.exports = countOccurrences;
