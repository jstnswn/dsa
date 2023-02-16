function minMoves(n, startRow, startCol, endRow, endCol) {
    console.log(n, startRow, startCol, endRow, endCol)
    const startCoord = [startRow, startCol];
    const queue = [[startCoord]];
    const visited = new Set([JSON.stringify(startCoord)]);

    while (queue.length) {
        const path = queue.shift();
        // console.log('PATH', path)
        const vertex = path[path.length - 1];
        // end scenario:
        if (vertex[0] === endRow && vertex[1] === endCol) return path.length - 1;

        const neighbors = getNeighbors(n, vertex);
        neighbors.forEach(neighbor => {
            const strNeigh = JSON.stringify(neighbor);
            if (!visited.has(strNeigh)) {
                visited.add(strNeigh);
                queue.push([...path, neighbor]);
            }
        })
    }
    return -1;
}

function getNeighbors(n, coord) {
    const [row, col] = coord;
    const neighbors = [];

    // up-right
    if (row - 2 >= 0 && col + 1 <= n) neighbors.push([row - 2, col + 1]);
    // up-left
    if (row - 2 >= 0 && col - 1 >= 0) neighbors.push([row - 2, col - 1])
    // right-up
    if (row - 1 >= 0 && col + 2 <= n) neighbors.push([row - 1, col + 2]);
    // right-down
    if (row + 1 <= n && col + 2 <= n) neighbors.push([row + 1, col + 2])
    // down-right
    if (row + 2 <= n && col + 1 <= n) neighbors.push([row + 2, col + 1]);
    // down-left
    if (row + 2 <= n && col - 1 >= 0) neighbors.push([row + 2, col - 1]);
    // left-up
    if (row - 1 >= 0 && col - 2 >= 0) neighbors.push([row - 1, col - 2]);
    // left-down
    if (row + 1 <= n && col - 2 >= 0) neighbors.push([row + 1, col - 2]);

    return neighbors;
}

102
