'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'weightCapacity' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY weights
 *  2. INTEGER maxCapacity
 */

// if the max capacity exists in the weights array, return max capacity
// Generate all possible subsets
// Map the subsets, returning the sum of the intergers they contain
// Find the summed subset that is closest to the max capacity.

function weightCapacity(weights, maxCapacity) {
    if (weights.includes(maxCapacity)) return maxCapacity;

    const subsets = getSubsets(weights);
    let max = -Infinity;

    for (let set of subsets) {
        const summed = sumSet(set);
        if (summed <= maxCapacity && summed > max) max = summed;
    }

    return max;
}

function getSubsets(arr) {
    if (arr.length === 0) return [arr];
    const lastIdx = arr.length - 1;
    const last = arr[lastIdx];

    return [...getSubsets(arr.slice(0, lastIdx)), ...getSubsets(arr.slice(0, lastIdx)).map(set => [...set, last])];
}

function sumSet(set) {
    if (!set.length) return 0;
    return set.reduce((prev, curr) => prev + curr)
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const weightsCount = parseInt(readLine().trim(), 10);

    let weights = [];

    for (let i = 0; i < weightsCount; i++) {
        const weightsItem = parseInt(readLine().trim(), 10);
        weights.push(weightsItem);
    }

    const maxCapacity = parseInt(readLine().trim(), 10);

    const result = weightCapacity(weights, maxCapacity);

    ws.write(result + '\n');

    ws.end();
}
