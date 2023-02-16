// given an array of integers between 1 and n, inclusive, where n is the length of the array, write a function that returns the first integer that appears more than once.

function firstDuplicateValue(array) {
    // store visited nums at the index equal to the current value -1 (so you don't go past 0). To "store" just flip the value to a negative.
    for (let val of array) {
        const absVal = Math.abs(val);
        if (array[absVal - 1] < 0) return absVal;
        array[absVal - 1] *= -1;
    }

    return -1;
};

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]));
// O(n) time | O(1) space
