// var maxSubArray = function (nums) {
//     if (nums.length === 1) return nums[0];
//     let left = 0;
//     let right = 1;
//     let max = nums[0];
//     let sum = nums[left];

//     while (right < nums.length) {
//         debugger
//         const currNum = nums[right];
//         if (sum + currNum > sum) {
//             sum += currNum;
//             right++
//         } else {
//             left = right + 1;
//             right = left + 1;
//             sum = nums[left];
//         }
//         max = Math.max(sum, max);
//     }

//     return max
// };

var maxSubArray = function (nums) {
    debugger
    let max = nums[0];
    let sum = nums[0];

    for (let right = 1; right < nums.length; right++) {
        const currNum = nums[right];
        if (sum + currNum > currNum) {
            sum += currNum;
        } else {
            sum = currNum;
        }
        max = Math.max(max, sum);
    }

    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
