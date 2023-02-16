const str = 'let';

function permutation(str, result = '') {
    if (!str.length) {
        return result;
    }
    const permutations = [];

    for (let i = 0; i < str.length; i++) {
        const rest = str.substring(0, i) + str.substring(i + 1);
        permutations.push(permutation(rest, result + str[i]));
    }

    return permutations;
}

// console.log(permutation(str))


const permute = function (nums, result = [], permutations = []) {
    if (!nums.length) {
        permutations.push(result);
    };

    for (let i = 0; i < nums.length; i++) {
        const rest = [...nums.slice(0, i), ...nums.slice(i + 1)];
        permute(rest, [...result, nums[i]], permutations);
    };

    return permutations;
};


function permush(str, permutation=[], permutations=[]) {
    if (str.length === 0) permutations.push([...permutation].join(''));

    for (let i = 0; i < str.length; i++) {
        permutation.push(str[i]);
        const rest = str.slice(0, i) + str.slice(i + 1);
        permush(rest, permutation, permutations);
        permutation.pop();
    }

    return permutations;
}

console.log(permush('let'))

/*

1, 2, 3
_ _ _

1 _ _ - [2, 3]
1 2 _ - [3]
1 2 3
1 3 _ - [2]
1 3 2

2 _ _ - [1, 3]
2 1 _ - [3]
2 1 3
2 3 _ - [1]
2 3 1

3 _ _ - [1, 2]


*/
