const vertices = ['A', 'B', 'C', 'D', 'E'];


// Time complexity to find adjecent nodes: O(v) where v is the number of vertices
// Time complexity to see if two nodes are connected: O(1)
// Space complexity: O(v^2);

// Not great if you need to store a small amount of data since the space complexity is expensive.

// NOTE: If graph is undirected, the matrix will be symetrical across an axis.
const adjacencyMatrix = [
    [0, 1, 0, 1, 1], // A
    [1, 0, 1, 0, 0], // B
    [0, 1, 0, 1, 1], // C
    [1, 0, 1, 0, 1], // D
    [0, 0, 1, 1, 0]  // E
];

vertexIndexes = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4
};

const findAdjacencies = (node) => {
    const nodeVertex = vertexIndexes[node];
    const adjacencies = [];

    for (let i = 0; i < adjacencyMatrix.length; i++) {
        if (adjacencyMatrix[nodeVertex][i] === 1) {
            adjacencies.push(vertices[i]);
        }
    }

    return adjacencies;
};

const isConnected = (node1, node2) => {
    const node1Idx = vertexIndexes[node1];
    const node2Idx = vertexIndexes[node2];

    return adjacencyMatrix[node1Idx][node2Idx] === 1;
};

console.log(findAdjacencies('E'));
// console.log(isConnected('A', 'C'))
