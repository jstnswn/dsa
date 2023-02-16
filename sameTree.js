const isSameTree = function (p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;

    if (p.val !== q.val) return false;

    if (!isSameTree(p.left, q.left)) return false;
    return isSameTree(p.right, q.right);

};


const isSymmetric = function (root) {
    if (!root) return true;

    return isSame(root.left, root.right);
};

function isSame(tree1, tree2) {
    if (tree1 === null && tree2 === null) return true;
    if (tree1 === null || tree2 === null) return false;

    if (tree1.val !== tree2.val) return false;

    if (!isSame(tree1.left, tree2.right)) return false;
    return isSame(tree1.right, tree2.left);
}
