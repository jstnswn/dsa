const bestBridge = (grid) => {
    const island1Visited = new Set();
    for (let row = 0; row < grid.length; row++) {
        let broken = false;
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 'L') {
                console.log(row, col)
                flipIsland(grid, [row, col], island1Visited);
                broken = true;
                break;
            }
        }
        if (broken) break;
    }

    let bestBridge = Infinity;
    for (let start of island1Visited) {
        const bridge = findBridge(grid, start);
        bestBridge = Math.min(bridge, bestBridge);
        // console.log('bridge', bridge)
    }
    return bestBridge;
};

function flipIsland(grid, coord, visited) {
    // console.log('coord', coord)
    function dfs(node) {
        const [row, col] = node;
        if (row < 0 || row >= grid.length) return;
        if (col < 0 || col >= grid[0].length) return;
        if (grid[row][col] === 'W') return;
        if (visited.has(JSON.stringify(node))) return;
        visited.add(JSON.stringify(node));
        grid[row][col] = 'W';

        flipIsland(grid, [row - 1, col], visited);
        flipIsland(grid, [row, col + 1], visited);
        flipIsland(grid, [row + 1, col], visited);
        flipIsland(grid, [row, col - 1], visited);
    }
    dfs(coord);
}

function findBridge(grid, start) {
    const visited = new Set([start]);
    const queue = [[...JSON.parse(start), 0]];
    while (queue.length) {
        const node = queue.shift();
        const [row, col, count] = node;
        if (grid[row][col] === 'L') return count - 1;

        const potentialChanges = [[-1, 0], [0, 1], [1, 0], [0, -1]];
        for (let change of potentialChanges) {
            const newChange = [row + change[0], col + change[1]];
            if (newChange[0] < 0 || newChange[0] >= grid.length) continue;
            if (newChange[1] < 0 || newChange[1] >= grid[0].length) continue;
            const strChange = JSON.stringify(newChange);
            if (!visited.has(strChange)) {
                visited.add(strChange);
                queue.push([...newChange, count + 1])
            }
        }
    }
}

const grid1 = [
    ["W", "W", "W", "L", "L"],
    ["L", "L", "W", "W", "L"],
    ["L", "L", "L", "W", "L"],
    ["W", "L", "W", "W", "W"],
    ["W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W"],
];
// bestBridge(grid); // -> 1
const grid2 = [
    ["W", "L", "W", "W", "W", "W", "W", "W"],
    ["W", "L", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "L", "W"],
    ["W", "W", "W", "W", "W", "W", "L", "L"],
    ["W", "W", "W", "W", "W", "W", "W", "L"],
];
bestBridge(grid1); // -> 8
