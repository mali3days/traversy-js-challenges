const add = (n1, n2) => n1 + n2;
const subs = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;

const functions = {
    '+': add,
    '-': subs,
    '*': multiply,
    '/': divide
}

function calculator(num1, num2, operator) {
    return functions[operator](num1, num2);
}

module.exports = calculator;
