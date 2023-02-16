// start with a sorted array
// find middle el of array
// if middle el is target --> return el
// if middle el is < target, recurse over right portion
// if middle el is > target, recurse over left portion
// keep track of index throughout recursive steps

// function binarySearch(arr, target, start=0, end=arr.length - 1) {
//     if (!arr.length) return -1;
//     debugger;

//     const midIdx = Math.floor(arr.length / 2);
//     const el = arr[midIdx];

//     if (el === target) {
//         if (start !== end) return start + midIdx;
//         else return start;
//     }

//     if (el < target) {
//         return binarySearch(arr.slice(midIdx + 1), target, start + midIdx + 1, end);
//     }
//     else {
//         return binarySearch(arr.slice(0, midIdx), target, start, end - midIdx);
//     }
// };

function binarySearch(array, target, left = 0, right = array.length - 1) {
    let midIdx = Math.floor((left + right) / 2);
    let midEle = array[midIdx];


    if (midEle === target) return midIdx;
    if (left > right) return -1;
    if (target < midEle) {
        return binarySearch(array, target, left, midIdx - 1);
    } else {
        return binarySearch(array, target, midIdx + 1, right);
    }
}

// console.log(binarySearch([1,2,3,4,5,6,7,8,9, 10], 1))
console.log(binarySearch([1, 3], 3))


// [2,4,5]
