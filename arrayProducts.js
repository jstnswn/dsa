// Replace each el of array with total product of all elements except for itself
// don't use "/"

function arrayProducts(array) {
    const leftProducts = new Array(array.length).fill(1);
    const rightProducts = new Array(array.length).fill(1);
    const products = new Array(array.length).fill(1);

    let leftRunningProducts = 1;
    for (let i = 0; i < array.length; i++) {
        leftProducts[i] = leftRunningProducts;
        leftRunningProducts *= array[i];
    }

    let rightRunningProducts = 1;
    for (let i = array.length - 1; i > -1; i--) {
        rightProducts[i] = rightRunningProducts;
        rightRunningProducts *= array[i];
    }

    for (let i = 0; i < array.length; i++) {
        products[i] = rightProducts[i] * leftProducts[i];
    }

    return products;
}


console.log(arrayProducts([5, 1, 4, 2]))
// [8, 40, 10, 20]


