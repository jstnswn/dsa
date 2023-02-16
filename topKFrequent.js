var topKFrequent = function (nums, k) {
    const freq = nums.reduce((acc, num) => {
        acc[num] = num in acc ? acc[num] + 1 : 1;
        return acc;
    }, {});

    const bucketArray = new Array(nums.length);
    for (let num in freq) {
        const currFreq = freq[num];
        if (bucketArray[currFreq]) bucketArray[currFreq].push(num);
        else bucketArray[currFreq] = [num];
    }
    console.log('FREQ', freq);
    console.log('BUCKET', bucketArray)
    const res = [];
    for (let i = nums.length; i >= 0; i--) {
        if (bucketArray[i] !== undefined) {
            for (let item of bucketArray[i]) {
                res.push(item);
                if (res.length === k) return res;
            }
        }
    }
    return res;
};

console.log(topKFrequent([1], 1))
