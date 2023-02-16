function findRemainingBalls(direction, strength) {
    const result = direction[0] > 0 ? [] : [0];
    const battleStack = direction[0] > 0 ? [0] : [];
    for (let i = 1; i < direction.length; i++) {
        const currStrength = strength[i];
        const currDirection = direction[i];
        if (currDirection > 0) {
            battleStack.push(i);
        } else {
            while (battleStack.length && currStrength > strength[battleStack[battleStack.length - 1]]) {
                battleStack.pop();
            }
            if (!battleStack.length) {
                result.push(i);
            }
        }
    }
    return [...result, ...battleStack];
}
