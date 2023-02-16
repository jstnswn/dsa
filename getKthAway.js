class Node {
    constructor(x) {
        this.key = x;
        this.left = null;
        this.right = null;
    }
}

/**
 * @param {Node} root
 * @param {number} target
 * @param {number} k
 * @return {number[]}
*/
class Solution {
    KDistanceNodes(root, target, k) {
        const node = this.findNode(root, target);

        const collection = [];

        this.getDownStream(node, k, collection)
        this.getSibling(root, target, collection)

        return collection
    }

    getDownStream(node, k, collection, depth = 0) {
        if (!node) return;
        if (depth === k) {
            collection.push(node.key);
            return;
        }

        this.getDownStream(node.left, k, collection, depth + 1);
        this.getDownStream(node.right, k, collection, depth + 1);
    }

    findNode(root, target) {
        if (!root) return null;
        if (root.key === target) return root;

        if (target < root.key) return this.findNode(root.left, target);
        if (target > root.key) return this.findNode(root.right, target);
    }

    findParent(root, target) {
        if (!root.right && !root.left) return null;


        if (target < root.key) return this.findNode(root.left);
        if (target > root.key) return this.findNode(root.right);

    }

    getSibling(root, target, collection) {
        if (!root.right && !root.left) return null;
        if (root.left && root.left.key === target) {
            if (root.right) collection.push(root.right.key);
            return;
        }
        if (root.right && root.right.key === target) {
            if (root.left) collection.push(root.left.key);
            return;
        }

        if (target < root.key) return this.findNode(root.left);
        if (target > root.key) return this.findNode(root.right)
    }





}
