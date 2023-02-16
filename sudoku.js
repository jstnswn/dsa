var isValidSudoku = function (board) {
    const validRowsAndCols = checkRowsAndCols(board);
    const validSquares = checkSquares(board);
    return validRowsAndCols && validSquares;
};

function checkSquares(board) {
    for (let row = 0; row < board.length; row += 3) {
        for (let col = 0; col < board[0].length; col += 3) {
            if (!checkSquare([row, col], board)) return false;
        }
    }
    return true;
}

function checkSquare(start, board) {
    const [startRow, startCol] = start;
    debugger
    let set = new Set();
    for (let row = startRow; row < startRow + 3; row++) {
        for (let col = startCol; col < startCol + 3; col++) {
            const el = board[row][col];
            if (el !== '.' && set.has(el)) return false;
            set.add(el);
        }
    }
    return true;
}

function checkRowsAndCols(board) {
    let row = 0;
    let col = 0;
    while (row < board.length && col < board[0].length) {
        if (!checkRow(row, board)) return false;
        if (!checkCol(col, board)) return false;
        row++;
        col++;
    }
    return true;
}

function checkRow(row, board) {
    const set = new Set();
    for (let col = 0; col < board[0].length; col++) {
        const el = board[row][col];
        if (el !== '.' && set.has(el)) return false;
        set.add(el);
    }
    return true;
}

function checkCol(col, board) {
    const set = new Set();
    for (let row = 0; row < board.length; row++) {
        const el = board[row][col];
        if (el !== '.' && set.has(el)) return false;
        set.add(el);
    }
    return true;
}

const board = [
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."]
]

console.log(isValidSudoku(board));
