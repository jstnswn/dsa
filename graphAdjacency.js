const vertices = ['A', 'B', 'C', 'D', 'E'];

const edges = [
    ['A', 'B'],
    ['A', 'D'],
    ['B', 'C'],
    ['C', 'D'],
    ['C', 'E'],
    ['D', 'E']
];

// Time complexity to find adjacent nodes: O(e) where e is the number of edges
// Time complexity to find if two nodes are connected O(e);
// Space complexity: O(v + e);

const findAdjacentNodes = (node) => {
    const adjacentNodes = [];

    for (let edge of edges) {
        const idx = edge.indexOf(node);
        if (idx === 0) adjacentNodes.push(edge[1]);
        else if (idx === 1) adjacentNodes.push(edge[0]);
    }

    return adjacentNodes;
}

// const isConnected = (node1, node2) => {
//     const adjacentNodes1 = findAdjacentNodes(node1);
//     const adjacentNodes2 = findAdjacentNodes(node2);

//     for (let node of adjacentNodes1) {
//         if (adjacentNodes2.includes(node)) return true;
//     }

//     return false;
// };

const isConnected = (node1, node2) => {
    return edges.some(edge => {
        return edge.includes(node1) && edge.includes(node2);
    })
};

// console.log(findAdjacentNodes('D'));
console.log(isConnected('A', 'D'));
