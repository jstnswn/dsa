

function subsets(arr) {
    if (!arr.length) return [arr];

    const last = arr[arr.length - 1];

    return [...subsets(arr.slice(0, arr.length - 1)),
         ...subsets(arr.slice(0, arr.length - 1)).map(set => [...set, last])];
};

console.log(subsets(['a', 'b', 'c']))


function getPermutations(array, permutation = [], permutations = []) {
    if (!array.length) {
        if (!permutation.length) return [];
        permutations.push([...permutation]);
    }

    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        permutation.push(current);
        const rest = array.filter((num, indx) => indx !== i);
        getPermutations(rest, permutation, permutations);
        permutation.pop();
    }

    return permutations;
}
