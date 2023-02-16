function riverSizes(matrix) {
    const rivers = [];
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 1) {
                const riverCount = measureAndFlip([row, col], matrix);
                rivers.push(riverCount);
            }
        }
    }
    return rivers;
}

function measureAndFlip(coord, matrix) {
    const queue = [coord];
    const visited = new Set(JSON.stringify(coord));
    let count = 0;

    while (queue.length) {
        debugger;
        count++;
        const currCoord = queue.shift();
        const [row, col] = currCoord;
        matrix[row][col] = 0;
        const neighbors = getNeighbors(currCoord, matrix);

        neighbors.forEach(neighbor => {
            const strNeigh = JSON.stringify(neighbor);
            if (!visited.has(strNeigh)) {
                queue.push(neighbor)
                visited.add(strNeigh);
            }
        });
    }
    return count;
}

function getNeighbors(coord, matrix) {
    const [row, col] = coord;
    const neighbors = [];
    //up
    if (row - 1 >= 0 && matrix[row - 1][col] === 1) neighbors.push([row - 1, col]);
    //right
    if (col + 1 < matrix[0].length && matrix[row][col + 1] === 1) neighbors.push([row, col + 1]);
    //down
    if (row + 1 < matrix.length && matrix[row + 1][col] === 1) neighbors.push([row + 1, col]);
    //left
    if (col - 1 >= 0 && matrix[row][col - 1] === 1) neighbors.push([row, col - 1]);
    return neighbors
}


console.log(riverSizes([
    [1, 1, 0],
    [1, 0, 1],
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
    [1, 0, 0],
    [0, 0, 0],
    [1, 0, 0],
    [1, 0, 1],
    [1, 1, 1]
]))
