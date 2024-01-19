function removeDuplicates(arr) {
    const dic = {}

    return arr.filter((val, index) => {
        if (dic[val]) return false;
        dic[val] = true;
        return true;
    });
}

module.exports = removeDuplicates;
