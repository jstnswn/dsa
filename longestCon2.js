var longestConsecutive = function (nums) {
    const numList = nums.reduce((acc, num) => {
        acc[num] = true;
        return acc;
    }, {});

    const startNodes = [];
    for (let num of nums) {
        if (numList[num - 1] === undefined) startNodes.push(num);
    }

    let longest = 0;

    for (let start of startNodes) {
        let count = 1;
        let node = start;
        while (numList[node + 1]) {
            count++;
            node = node + 1;
        }

        longest = Math.max(count, longest);
    }

    return longest;
};



const arr = [0, -1];
const arr2 = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(arr))
