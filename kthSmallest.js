var kthSmallest = function (root, k) {
    let kthSmall;

    function traverseOrdered(root, k) {
        if (root === null || kthSmall) return;
        // console.log(k)

        traverseOrdered(root.left, k);
        k--;
        console.log(k)
        if (k === 0 && !kthSmall) {

            kthSmall = root.val;
            // console.log(kthSmall)
            return;
        }
        traverseOrdered(root.right, k);

    }
    traverseOrdered(root, k);

    return kthSmall;
};

console.log(kthSmallest([5, 3, 6, 2, 4, null, null, 1],3));
