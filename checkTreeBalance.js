function heightBalancedBinaryTree(tree) {

    function checkBalance(node) {
        if (node === null) return [true, 0];

        let left = checkBalance(node.left);
        let right = checkBalance(node.right);

        const balanced = (Math.abs(left[1] - right[1]) <= 1) &&
            (left[0] === true && right[0] === true);

        return [balanced, 1 + Math.max(left[1], right[1])]
    }

    return checkBalance(tree)[0];
}
