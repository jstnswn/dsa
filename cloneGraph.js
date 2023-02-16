class Node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
};

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors.push(node3);
node2.neighbors.push(node4);
node3.neighbors.push(node1);
node4.neighbors.push(node2);

const cloneGraph = (node) => {
    const hashMap = {};

    const dfs = (node) => {
        if (!node) return null;

        if (!(node.val in hashMap)) {
            hashMap[node.val] = new Node(node.val);
            hashMap[node.val].neighbors = node.neighbors.map(dfs);
        }

        return hashMap[node.val];
    };

    return dfs(node);
};

console.log(cloneGraph(node1));
