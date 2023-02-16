
const s = "MCMXCIV";
// 1994


var romanToInt = function (s) {
    const nums = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let result = 0;

    for (let i = 0; i < s.length; i++) {

        const currEl = s[i];
        if (i === s.length -1 ) {
            result += nums[currEl];
            break;
        }
        const nextEl = s[i + 1];

        if (nums[currEl] < nums[nextEl]) {
            result -= nums[currEl];
        } else {
            result += nums[currEl];
        }
    }

    return result;
};

console.log(romanToInt(s));
