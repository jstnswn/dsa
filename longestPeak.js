function longestPeak(array) {
    let maxPeak = 0;

    for (let i = 1; i < array.length - 1; i++) {
        const currVal = array[i];
        const isPeak = array[i - 1] < currVal && array[i + 1] < currVal;
        if (!isPeak) continue;

        let leftIdx = i - 1;
        while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) leftIdx--;

        let rightIdx = i + 1;
        while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) rightIdx++;

        maxPeak = Math.max(maxPeak, rightIdx - leftIdx - 1);
    }

    return maxPeak;
}

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
