function preOrderTraverse(tree, array) {
    if (tree === null) return array;

    array.push(tree.value);

    preOrderTraverse(tree.left, array);

    preOrderTraverse(tree.right, array);
    return array;
}


console.log(preOrderTraverse({
    value: 10,
    left: {
        value: 5,
        left: {
            value: 2,
            left: {value: 1, left: null, right: null},
            right: null
        },
        right: {value: 5, left: null, right: null}
    },
    right: {
        value: 15,
        left: null,
        right: {value: 22, left: null, right: null}
    }
},[] ))
