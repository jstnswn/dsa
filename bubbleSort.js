const nums = [3, 1, 32, 4, 56, 2, 4, 9];

function bubbleSort(arr) {

    let count = 0;
    let swapped = false;



    while(arr) {
        currIdx = count % (arr.length - 1);

        if (arr[currIdx] > arr[currIdx + 1]) {
            [arr[currIdx], arr[currIdx + 1]] = [arr[currIdx + 1], arr[currIdx]];
            swapped = true;
        }

        if (currIdx === nums.length - 2) {
            if (!swapped) return arr;
            else swapped = false;
        }
        count++;
    }


};

console.log(bubbleSort(nums));

