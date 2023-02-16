

function stringSubsets(string) {
    const arraySubsets = getSubsets(string.split(''));
    // return arraySubsets;
    return arraySubsets.map(subset => subset.join(''));
}

function getSubsets(array) {
    if (array.length === 0) return [array];

    const last = array[array.length - 1];
    const rest = array.slice(0, array.length - 1);
    const subsets = getSubsets(rest);
    return [...subsets, ...subsets.map(set => [...set, last])];
}


function stringSubsets2(string) {
    if (string.length === 0) return [string];

    const last = string[string.length - 1];
    const rest = string.slice(0, string.length - 1);
    const subsets = stringSubsets2(rest);
    const result = [];

    for (let subset of subsets) {
        result.push(subset);
        result.push(subset + last);
    }

    return result;
}

console.log(stringSubsets2('abc'));
