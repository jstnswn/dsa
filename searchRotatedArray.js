var findMin = function (nums, left = 0, right = nums.length, res = nums[0]) {
    if (left === right) return res;

    const mid = Math.floor((right + left) / 2);
    const midVal = nums[mid];
    if (midVal < res) res = midVal;

    if (midVal >= nums[0]) {
        return findMin(nums, mid + 1, right, res)
    } else {
        return findMin(nums, left, mid, res);
    }
};
