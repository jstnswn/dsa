class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

const tree1 = new TreeNode(5);
tree1.left = new TreeNode(3);
tree1.right = new TreeNode(7);
tree1.right.left = new TreeNode(6);
tree1.right.right = new TreeNode(8);

const tree2 = new TreeNode(2);
tree2.right = new TreeNode(2);
tree2.left = new TreeNode(2);

const isValidBST = (root, min=-Infinity, max=Infinity) => {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;

    if (!isValidBST(root.left, min, root.val)) return false;
    if (!isValidBST(root.right, root.val, max)) return false;

    return true;
}

console.log(isValidBST(tree1));
