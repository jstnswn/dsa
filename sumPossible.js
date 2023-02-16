const sumPossible = (amount, numbers) => {
    if (amount === 0) return true;
    if (amount < 0) return false;

    for (let number of numbers) {
        if (amount - number >= 0) {
            if (sumPossible(amount - number, numbers)) return true;
        }
    }
    return false;
};


const sumPossible2 = (amount, numbers, mem = {}) => {
    if (amount === 0) return true;
    if (amount < 0) return false;

    if (amount in mem) return mem[amount];

    for (let number of numbers) {
        if (sumPossible(amount - number, numbers, mem)) {
            mem[amount] = true;
            return true;
        }
    }

    mem[amount] = false;
    return false;
};
