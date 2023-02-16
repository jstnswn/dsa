function countMoves(numbers) {
    let max = Math.max(...numbers);
    let maxIdx = numbers.findIndex(num => num === max);
    let min = Math.min(...numbers);
    let count = 0;

    while (max !== min) {
        count++;
        for (let i = 0; i < numbers.length; i++) {
            if (i === maxIdx) continue;
            numbers[i]++;
        }
        max = Math.max(...numbers);
        maxIdx = numbers.findIndex(num => num === max);
        min = Math.min(...numbers);
    }

    return count;
}

