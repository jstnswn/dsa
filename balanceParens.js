

function balanceParens1(parens) {
    const array = parens.split('');

    const res1 = [];
    let openCount = 0;
    let closeCount = 0;
    for (let paren of array) {
        if (paren === '(') openCount++;
        if (paren === ')') {
            if (closeCount >= openCount) continue;
            else closeCount++;
        }
        res1.push(paren);
    }

    const res2 = [];
    openCount = 0;
    closeCount = 0;
    for (let i = res1.length - 1; i >= 0; i--) {
        const paren = res1[i];
        if (paren === ')') closeCount++;
        if (paren === '(') {
            if (openCount >= closeCount) continue;
            else openCount++;
        }
        res2.unshift(paren);
    }


    return res2.join('');
}

function balanceParens2(parens) {
    const array = parens.split('');

    let openCount = 0;
    let closeCount = 0;
    for (let i = 0; i < array.length; i++) {
        const paren = array[i];
        if (paren === '(') openCount++;
        if (paren === ')') closeCount++;


        if (closeCount > openCount) {
            array.splice(i, 1);
            closeCount--;
            i--;
        }
    }

    openCount = 0;
    closeCount = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        const paren = array[i];
        if (paren === '(') openCount++;
        if (paren === ')') closeCount++;

        if (openCount > closeCount) {
            array.splice(i, 1);
            openCount--;
        }
    }

    return array.join('');
}

const s = "()(()()()()())))(((";

console.log(balanceParens1(s));
console.log(balanceParens2(s));

// At any point, there must be >= opening parens
