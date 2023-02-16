function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const midIndex = Math.floor(arr.length / 2);
    const left = arr.slice(0, midIndex);
    const right = arr.slice(midIndex);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}
function merge(left, right) {
    leftIndex = 0;
    rightIndex = 0;
    const mergedArr = [];

    while (leftIndex < left.length && rightIndex < right.length) {
        const leftEl = left[leftIndex];
        const rightEl = right[rightIndex];

        if (leftEl < rightEl) {
            mergedArr.push(leftEl);
            leftIndex++;
        } else {
            mergedArr.push(rightEl);
            rightIndex++;
        }
    }

    return [...mergedArr, ...left.slice(leftIndex), ...right.slice(rightIndex)]
}

console.log(mergeSort([8, 5, 2, 9, 5, 6, 3]));
