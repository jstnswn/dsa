const isSubtree = (root, subRoot) => {
    if (!root && !subRoot) return true;
    if (!root || !subRoot) return false;

    if (root.val === subRoot.val) {
        const checkTrees = isSame(root, subRoot);
        if (checkTrees) return true;
    };

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

function isSame(branch, subTree) {
    if (!branch && !subTree) return true;
    if (!branch || !subTree) return false;

    if (branch.val !== subTree.val) return false;

    if (!isSame(branch.left, subTree.left)) return false;
    return isSame(branch.right, subTree.right);
}
