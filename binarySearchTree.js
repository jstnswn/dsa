class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value < this.value) {
            if (!this.left) this.left = new BST(value);
            else this.left.insert(value);
        } else {
            if (!this.right) this.right = new BST(value);
            else this.right.insert(value);
        }
        return this;
    }

    contains(value) {
        if (this.value === value) return true;
        if (!this) return false;

        if (this.left && value < this.value) return this.left.contains(value);
        else if (this.right) return this.right.contains(value);

        return false;
    }

    remove(value) {
        const node = this.find(value);
        if (!node) return null;

        // One child
        if (node.left && !node.right) {
            const tempChild = node.left;
            // node.left = null;
            const parent = this.getParent(node.value);

            if (!parent) {
                node.value = tempChild.value;
                node.right = tempChild.right;
                node.left = tempChild.left;
            }

            if (parent && parent.left && parent.left.value === node.value) {
                parent.left = tempChild;
            } else if (parent && parent.right) parent.right = tempChild;
        } else if (!node.left && node.right) {
            const tempChild = node.right;
            // node.right = null;
            const parent = this.getParent(node.value);

            if (!parent) {
                node.value = tempChild.value;
                node.right = tempChild.right;
                node.left = tempChild.left;
            }

            if (parent && parent.left && parent.left.value === node.value) {
                parent.left = tempChild
            } else if (parent && parent.right) parent.right = tempChild;


        }

        // No children
        if (!node.left && !node.right) {
            const parent = this.getParent(node.value);
            // if (!parent) this.value = null;
            if (parent && parent.left && parent.left.value === value) parent.left = null;
            if (parent && parent.right && parent.right.value === value) parent.right = null;
        }

        // Two children

        if (node.left && node.right) {
            const rightLeftMost = node.right.getLeftMost();
            const parent = node.getParent(rightLeftMost.value);
            if (parent && parent.left && parent.left.value === rightLeftMost.value) parent.left = null;
            else if (parent && parent.right) parent.right = null;

            node.value = rightLeftMost.value;
        }

        return this;
    }

    find(value) {
        if (!this) return null;
        if (this.value === value) return this;
        if (this.left && value < this.value) return this.left.find(value);
        else if (this.right) return this.right.find(value); //
    }

    getParent(value) {
        if (!this.left && !this.right) return null;

        if (this.left && this.left.value === value ||
            this.right && this.right.value === value) return this;

        if (this.left && value < this.value) return this.left.getParent(value);
        else if (this.right) return this.right.getParent(value); ///
        return null;
    }

    getLeftMost() {
        if (!this.right && !this.left) return this;
        if (this.left) return this.left.getLeftMost();
        else return this.right.getLeftMost()
    }
}

function inOrder(tree, nodes=[]) {
    if (!tree) return;
    inOrder(tree.left, nodes);
    nodes.push(tree.value);
    inOrder(tree.right, nodes);

    return nodes;
}


// function printInOrder(tree1, tree2, nodes=[]) {
//     const nodes = [];
//     let current1;
//     let current2;
//     let tree1Full = false;
//     let tree2Full = false;

//     while (!tree1Full || !tree2Full) {

//     }

//     function search1(tree) {
//         if (!tree) return;
//         inOrder(tree.left, nodes);
//         nodes.push(tree.value);
//         inOrder(tree.right, nodes);
//     }

//     function search2(tree) {
//         if (!tree) return;
//         inOrder(tree.left, nodes);
//         nodes.push(tree.value);
//         inOrder(tree.right, nodes);
//     }

//     search1(tree1);
//     search2(tree2);

//     return nodes;
// }

const bst1 = new BST(10);
const bst2 = new BST(12)

// bst1.insert(10);
bst1.insert(5);
bst1.insert(15);
bst1.insert(2);
bst1.insert(5);
bst1.insert(13);
bst1.insert(22);
bst1.insert(1);
bst1.insert(14);
bst1.insert(12);

bst2.insert(3);
bst2.insert(15);
bst2.insert(2);
bst2.insert(1);
bst2.insert(19);
bst2.insert(9);
bst2.insert(8);
bst2.insert(6);
bst2.insert(4);


// console.log(bst1)
// console.log(bst1)
console.log(inOrder(bst1))
console.log(inOrder(bst2))
// console.log(printInOrder(bst1, bst2))
// console.log(printInOrder(bst2))


function merge(left, right) {
    let leftIdx = 0;
    let rightIdx = 0;
    const result = [];

    while (leftIdx < left.length || rightIdx < right.length) {
        const leftEl = left[leftIdx];
        const rightEl = right[rightIdx];

        if (leftEl < rightEl || rightIdx >= right.length) {
            result.push(leftEl);
            leftIdx++;
        } else if (rightEl <= leftEl || leftIdx >= left.length){
            result.push(rightEl);
            rightIdx++;
        }
    }

    return result;;
}

console.log(merge(inOrder(bst1), inOrder(bst2)));
