// function productSum(array, sum = 0, depth = 1) {
//     debugger
//     if (array.length === 1 && !Array.isArray(array[0])) {
//         sum += (array[0] * depth);
//         return sum;
//     }

//     const currEl = array.pop();

//     if (typeof currEl === 'number') {
//         sum += (currEl * depth);
//         return productSum(array, sum, depth);
//     }

//     if (Array.isArray(currEl)) {
//         return productSum(currEl, 0, depth + 1) + productSum(array, sum, depth)
//     }
// }



function productSum(array, depth = 1) {
    debugger;
    if (array.length === 1 && !Array.isArray(array[0])) {
        return array[0] * depth;
    }
    if (!array.length) return 0;

    let sum = 0;

    for (let el of array) {
        if (Array.isArray(el)) {
            sum += productSum(el, depth + 1);
        } else {
            sum += (el * depth)
        }
    }

    return sum * depth;
}

const nested =
[
    [
        [
            [
                [5]
            ]
        ]
    ]
];

console.log(productSum(nested));
