var canJump = function (nums) {
    if (nums.length === 1) return true;
    let jump = 0;

    for (let i = 0; i < nums.length; i++) {
        jump = Math.max(jump, nums[i]);
        if (i + jump >= nums.length - 1) return true;
        if (jump === 0) return false;
        jump--;
    }
    return false;
};


const jumps = [3, 2, 1, 0, 4];
const jumps2 = [0, 1];
const jumps3 = [2, 3, 1, 1, 4];

console.log(canJump(jumps3));
