function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let pointer1 = 0;
    let pointer2 = str.length - 1;


    while (pointer1 < pointer2) {
        if (str[pointer1] === str[pointer2]) {
            pointer1++;
            pointer2--;
            continue;
        } else {
            return false;
        }
    }

    return true;
}

module.exports = isPalindrome;
