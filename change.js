// function nonConstructibleChange(coins) {
//     coins.sort((a, b) => a - b);



//     return 1;
// }



function getSubsets(arr) {
    if (!arr.length) return [arr];

    const last = arr[arr.length - 1];
    const sets = [...getSubsets(arr.slice(0, arr.length - 1)), ...getSubsets(arr.slice(0, arr.length - 1)).map(el => [...el, last])]

    return sets;
}

const change = [1, 1, 2, 3, 5, 7, 22];
// 20
console.log(nonConstructibleChange(change));
