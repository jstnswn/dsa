function removeIslands(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 1) {
                const island = checkIsland(matrix, [row, col]);
                if (island) remove(matrix, island);
            }
        }
    }
    return matrix;
}

function checkIsland(matrix, coord) {
    const set = new Set();
    let isIsland = true;

    function dfs(coord) {
        if (!isValid(matrix, coord)) return;
        if (set.has(coord.toString())) return;
        set.add(coord.toString());

        const [row, col] = coord;
        if (isBorder(matrix, coord)) {
            isIsland = false;
            return;
        }

        dfs([row - 1, col]);
        dfs([row, col + 1]);
        dfs([row + 1, col]);
        dfs([row, col - 1]);
    }

    dfs(coord);
    if (isIsland) return set;
    else return false;
}

function isValid(matrix, coord) {
    const [row, col] = coord;
    if (row < 0 || row >= matrix.length) return false;
    if (col < 0 || col >= matrix[0].length) return false;
    return matrix[row][col] === 1;
}


function isBorder(matrix, coord) {
    const [row, col] = coord;
    if (row === 0 || row === matrix.length - 1) return true;
    if (col === 0 || col === matrix[0].length - 1) return true;
    return false;
}

function remove(matrix, set) {
    for (let strCoord of set) {
        const coords = strCoord.split(',');
        matrix[coords[0]][coords[1]] = 0;
    }
}


const island = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

console.log(removeIslands(island));
