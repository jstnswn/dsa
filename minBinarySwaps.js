function minMoves(arr) {
    return Math.min(
        countToLeft(arr),
        countToRight(arr)
    );
}

function countToLeft(arr) {
    const zeroCounts = new Array(arr.length).fill(0);
    let zeroCount = 0;
    for (let i = 0; i < arr.length; i++) {
        zeroCounts[i] = zeroCount;
        if (arr[i] === 0) zeroCount++;
    }

    let numSwaps = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 1) {
            numSwaps += zeroCounts[i];
        }
    }

    return numSwaps;
}

function countToRight(arr) {
    const zeroCounts = new Array(arr.length).fill(0);
    let zeroCount = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        zeroCounts[i] = zeroCount;
        if (arr[i] === 0) zeroCount++;
    }

    let numSwaps = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            numSwaps += zeroCounts[i];
        }
    }

    return numSwaps;
}



const test3 = [1, 0, 1, 0, 0, 0, 1, 1]










function minMoves(arr) {
    return Math.min(
        countSwaps(arr, 'left'),
        countSwaps(arr, 'right')
    );
}

function countSwaps(arr, direction) {
    const zeroCounts = new Array(arr.length).fill(0);

    let i = direction === 'right' ? arr.length - 1 : 0;
    const iStep = direction === 'right' ? -1 : 1;

    let zeroCount = 0;
    while (i >= 0 && i < arr.length) {
        zeroCounts[i] = zeroCount;
        if (arr[i] === 0) zeroCount++;
        i += iStep;
    }

    let j = direction === 'right' ? 0 : arr.length - 1;
    const jStep = direction === 'right' ? 1 : -1;

    let numSwaps = 0;
    while (j >= 0 && j < arr.length) {
        if (arr[j] === 1) numSwaps += zeroCounts[j];
        j += jStep
    }

    return numSwaps;
}
