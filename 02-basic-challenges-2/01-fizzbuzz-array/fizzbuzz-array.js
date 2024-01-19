function isFizz(n) {
    return n % 3 === 0;
}

function isBuzz(n) {
    return n % 5 === 0;
}

function fizzBuzzArray(n) {
    // if the number is divisible by 3, you should replace the number with "Fizz". 
    // If the number is divisible by 5, you should replace the number with "Buzz". 
    // If the number is divisible by both 3 and 5, you should replace the number with "FizzBuzz".
    const result = [];

    for (let i = 1; i <= n; i++) {
        const fizz = isFizz(i);
        const buzz = isBuzz(i);

        if (fizz && buzz) {
            result.push('FizzBuzz');
        } else if (fizz) {
            result.push('Fizz');
        } else if (buzz) {
            result.push('Buzz');
        } else {
            result.push(i)
        }
    }

    return result;
}

module.exports = fizzBuzzArray;
