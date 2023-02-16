




function pairNums(nums) {
    const res = [];
    const stack = [];
    for (let num of nums) {
        while (num > stack[stack.length - 1]) {
            const pair = [stack.pop(), num];
            res.push(pair);
        }
        stack.push(num);
    }
    return res;
}



const input = [17, 14, 11, 9, 13, 21, 7];
console.log(pairNums(input));
