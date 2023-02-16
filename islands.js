var numIslands = function (grid) {
    console.log('grid', grid)
    debugger
    let count = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '1') {
                count++;
                flipIsland([row, col], grid);
            }
        }
    }

    return count;
};

function getNeighbors(coords, grid) {
    debugger;
    const [row, col] = coords;
    const neighbors = [];

    if (grid[row - 1] && grid[row - 1][col] === '1') neighbors.push([row - 1, col]);
    if (grid[0][col + 1] && grid[row][col + 1] === '1') neighbors.push([row, col + 1]);
    if (grid[row + 1] && grid[row + 1][col] === '1') neighbors.push([row + 1, col]);
    if (grid[0][col - 1] && grid[row][col - 1] === '1') neighbors.push([row, col - 1]);

    return neighbors;
}

function flipIsland(coords, grid) {
    const strStart = JSON.stringify(coords);
    const visited = new Set();
    const stack = [strStart];

    while (stack.length) {
        // console.log('stack', stack)
        const strCurr = stack.pop();
        const curr = JSON.parse(strCurr);
        grid[curr[0]][curr[1]] = '0';

        const neighbors = getNeighbors(curr, grid);

        neighbors.forEach(neighbor => {
            const str = JSON.stringify(neighbor);
            if (!visited.has(str)) {
                visited.add(str);
                stack.push(str);
            }
        })
    };
}

const grid = [["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]];
console.log(numIslands(grid));
