function titleCase(str) {
    return str.split(' ').reduce((result, word) => {
        result += (' ' + word[0].toUpperCase() + word.slice(1).toLowerCase());
        return result;
    }, '').slice(1);
}

module.exports = titleCase;
