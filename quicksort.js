function quicksort(arr) {
    if (arr.length < 1) return arr;

    const pivot = arr[0];

    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    const leftSort = quicksort(left);
    const rightSort = quicksort(right);

    return [...leftSort, pivot, ...rightSort];
}

console.log(quicksort([3,1,4,1,0, 9, 100, 2, 3]))
