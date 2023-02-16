






































const nums = [1,7,3,5,6];

const map = nums.reduce((acc, num) => {
    acc[num] = true;
    return acc;
}, {});

const sortedKeys = Object.keys(map);

console.log(sortedKeys);
