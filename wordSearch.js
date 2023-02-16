var exist = function (board, word) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === word[0]) {
                const hasWord = traverseWord(board, word, [row, col]);
                if (hasWord) return true;
            }
        }
    }
    return false;
};

// O(L)
function traverseWord(board, word, coord) {
    const strCoord = JSON.stringify(coord);
    const visited = new Set([strCoord]);
    let wordFound = false;

    function dfs(coord, wordIdx = 1) {
        // visited.add(JSON.stringify(coord))
        if (wordIdx === word.length || wordFound) {
            wordFound = true;
            return;
        }

        const neighbors = getNeighbor(board, word[wordIdx], coord);

        neighbors.forEach(neighbor => {
            const strNeigh = JSON.stringify(neighbor);
            if (!visited.has(strNeigh)) {
                visited.add(strNeigh);
                dfs(neighbor, wordIdx + 1);
            }
        })
        visited.delete(JSON.stringify(coord))
    }
    dfs(coord)
    return wordFound;
}

function getNeighbor(board, letter, coord) {
    const [row, col] = coord;
    const neighbors = [];

    if (row - 1 >= 0 && board[row - 1][col] === letter) neighbors.push([row - 1, col]);
    if (col + 1 < board[0].length && board[row][col + 1] === letter) neighbors.push([row, col + 1]);
    if (row + 1 < board.length && board[row + 1][col] === letter) neighbors.push([row + 1, col]);
    if (col - 1 >= 0 && board[row][col - 1] === letter) neighbors.push([row, col - 1]);

    return neighbors;
}


const board1 = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
];

const board2 = [
    ["a", "b"],
    ["c", "d"]
];

const board3 = [
    ["b", "b", "a", "a", "b", "a"],
    ["b", "b", "a", "b", "a", "a"],
    ["b", "b", "b", "b", "b", "b"],
    ["a", "a", "a", "b", "a", "a"],
    ["a", "b", "a", "a", "b", "b"]
];

// console.log(exist(board1, 'ABCB'));
// console.log(exist(board2, 'acdb'));
console.log(exist(board2, "abbbababaa"))
