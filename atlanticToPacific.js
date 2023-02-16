var pacificAtlantic = function (heights) {
    const paths = [];
    for (let row = 0; row < heights.length; row++) {
        for (let col = 0; col < heights[0].length; col++) {
            const coord = [row, col];
            const goodFlow = checkFlows(heights, coord);
            if (goodFlow) paths.push(coord);
        }
    }
    return paths;
};

// function checkFlows(heights, coord) {
//     let flowsToPacific = false;
//     let flowsToAtlantic = false;
//     const visited = new Set([coord.toString()]);

//     function dfs(coord) {
//         if (reachedPacific(coord)) flowsToPacific = true;
//         if (reachedAtlantic(coord, heights)) flowsToAtlantic = true;

//         const neighbors = getNeighbors(heights, coord);
//         neighbors.forEach(neighbor => {
//             const strNeigh = neighbor.toString();
//             if (!visited.has(strNeigh)) {
//                 visited.add(strNeigh);
//                 dfs(neighbor);
//             }
//         })
//     }

//     dfs(coord)

//     return flowsToPacific && flowsToAtlantic;
// }

function checkFlows(heights, coord) {
    let flowsToPacific = false;
    let flowsToAtlantic = false;
    const stack = [coord];
    const visited = new Set([coord.toString()]);

    while (stack.length && (!flowsToPacific || !flowsToAtlantic)) {
        const vertex = stack.pop();
        if (reachedPacific(vertex)) flowsToPacific = true;
        if (reachedAtlantic(vertex, heights)) flowsToAtlantic = true;

        const neighbors = getNeighbors(heights, vertex)
        neighbors.forEach(neighbor => {
            const strNeigh = neighbor.toString();
            if (!visited.has(strNeigh)) {
                visited.add(strNeigh);
                stack.push(neighbor);
            }
        })
    }

    return flowsToPacific && flowsToAtlantic;
}


function getNeighbors(heights, coord) {
    const [row, col] = coord;
    const currPeak = heights[row][col];
    const neighbors = [];

    if (row - 1 >= 0 && heights[row - 1][col] <= currPeak) neighbors.push([row - 1, col]);
    if (col + 1 < heights[0].length && heights[row][col + 1] <= currPeak) neighbors.push([row, col + 1]);
    if (row + 1 < heights.length && heights[row + 1][col] <= currPeak) neighbors.push([row + 1, col]);
    if (col - 1 >= 0 && heights[row][col - 1] <= currPeak) neighbors.push([row, col - 1]);

    return neighbors;
}

function reachedPacific(coord) {
    const [row, col] = coord;
    return row === 0 || col === 0;
};

function reachedAtlantic(coord, heights) {
    const [row, col] = coord;
    return row === heights.length - 1 || col === heights[0].length - 1;
}
