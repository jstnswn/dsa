var longestConsecutive = function (nums) {
    const map = nums.reduce((acc, num) => {
        acc[num] = true;
        return acc;
    }, {});

    let longest = 0;

    const startNums = nums.filter(num => {
        return map[num - 1] === undefined;
    })

    for (let num of startNums) {
        let currLongest = 1;
        let currNum = num;

        while(map[currNum + 1]) {
            currLongest++;
            currNum++;
        }

        longest = Math.max(currLongest, longest);
    }

    return longest;
};

const arr = [100, 4, 200, 1, 3, 2];
// find in O(n)

console.log(longestConsecutive(arr));
