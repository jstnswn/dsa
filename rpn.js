var evalRPN = function (tokens) {
    const operands = '+*-/';
    let numStack = [];
    let total;
    for (let el of tokens) {
        debugger
        if (!operands.includes(el)) {
            numStack.push(el);
        }
        else {
            const num = Number(numStack.pop());
            if (!total) {
                total = Number(numStack.pop());
            }
            total = operate(total, num, el);
        }
    }
    return total;
};

function operate(total, num, op) {
    if (op === '+') return total + num;
    if (op === '-') return total - num;
    if (op === '*') return total * num;
    if (op === '/') return total / num;
}

const tokens1 = ["2", "1", "+", "3", "*"];

const tokens2 = ["4", "13", "5", "/", "+"]

console.log(evalRPN(tokens2));
