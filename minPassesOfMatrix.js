function minimumPassesOfMatrix(matrix) {

    let flipped = true;
    let negatives = false;
    let count = 0;

    while (flipped) {
        debugger;
        const toFlip = [];
        flipped = false;
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[0].length; col++) {
                if (matrix[row][col] < 0) {
                    negatives = true;
                    debugger
                    const canFlip = checkFlip(matrix, [row, col]);
                    if (canFlip) {
                        toFlip.push([row, col]);
                        flipped = true;
                    }
                }
            }
        }
        if (flipped) {
            count++;
            flip(matrix, toFlip);
            negatives = false; //
        }
        // if (!flipped && count === 0) return -1;
    }
    if (negatives) return -1;
    return count;
}

function checkFlip(matrix, coord) {
    const neighbors = getNeighbors(matrix, coord);
    const [row, col] = coord;
    if (neighbors) {
        // matrix[row][col] *= -1;
        return true;
    }
    return false;
}

function flip(matrix, coords) {
    coords.forEach(coord => {
        const [row, col] = coord;
        matrix[row][col] *= -1;
    })
}

function getNeighbors(matrix, coord) {
    const [row, col] = coord;
    const neighbors = [];
    // up
    if (row - 1 >= 0 && matrix[row - 1][col] > 0) neighbors.push([row - 1, col]);
    // right
    if (col + 1 < matrix[0].length && matrix[row][col + 1] > 0) neighbors.push([row, col + 1]);
    // down
    if (row + 1 < matrix.length && matrix[row + 1][col] > 0) neighbors.push([row + 1, col]);
    // left
    if (col - 1 >= 0 && matrix[row][col - 1] > 0) neighbors.push([row, col - 1]);

    // return neighbors;
    return neighbors.length > 0;
}







matrix1 = [
    [0, -1, -3, 2, 0],
    [1, -2, -5, -1, -3],
    [3, 0, 0, -4, -1]
];

const matrix2 = [
    [1, 0, 0, -2, -3],
    [-4, -5, -6, -2, -1],
    [0, 0, 0, 0, -1],
    [1, 2, 3, 0, 3]
]

console.log(minimumPassesOfMatrix(matrix2));
