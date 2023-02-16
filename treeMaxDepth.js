const maxDepth = function (root) {
    if (!root) return 0;

    function dfs(node, depth) {
        if (!node) {
            return depth;
        }

        return Math.max(dfs(node.left, depth + 1), dfs(node.right, depth + 1));
    }


    return dfs(root, 0);
};

const maxDepth2 = function (root) {
    if (!root) return 0;

    let max = 0;
    function dfs(node, depth = 1) {
        if (!node) {
            if (depth > max) max = depth;
            return;
        }

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }

    dfs(root.left);
    dfs(root.right);

    return max;
}
