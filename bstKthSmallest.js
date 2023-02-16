class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

const tree1 = new TreeNode(5);
tree1.left = new TreeNode(3);
tree1.left.left = new TreeNode(2);
tree1.left.right = new TreeNode(4)
tree1.right = new TreeNode(7);
tree1.right.left = new TreeNode(6);
tree1.right.right = new TreeNode(8);

const tree2 = new TreeNode(2);
tree2.right = new TreeNode(2);
tree2.left = new TreeNode(2);

// Finds 3rd smallest if last left most branch is complete
const kthSmallest = (root, parent=null) => {
    const lastLeft = findLastLeftNode(root);
    return getParent(root, lastLeft.val);

}

const findLastLeftNode = (root) => {
    if (!root.left && !root.right) return root;

    return findLastLeftNode(root.left);
}

const getNode = (root, target) => {
    if (root.val === target) return root;
    if (!root) return null;

    if (target < root.val) return getNode(root.left, target);
    if (target > root.val) return getNode(root.right, target);
};

const getParent = (root, target, parent=null) => {
    if (root.val === target) return parent;
    if (!root) return null;

    if (target < root.val) return getParent(root.left, target, root);
    if (target > root.val) return getParent(root.right, target, root);

    return null;
}

// console.log(getParent(tree1, 8))
// console.log(findLastLeftNode(tree1));
console.log(kthSmallest(tree1));
