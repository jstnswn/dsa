var rotate = function (matrix) {
    const rotated = JSON.parse(JSON.stringify(matrix));
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            const rotatedRow = col;
            const rotatedCol = matrix.length - 1 - row;
            rotated[rotatedRow][rotatedCol] = matrix[row][col];
        }
    }
    return rotated;
};

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(rotate(matrix))


var rotate = function (matrix) {
    let left = 0,
        right = matrix.length - 1;

    while (left < right) {
        for (let i = 0; i < right - left; i++) {
            const top = left;
            const bottom = right;

            const tempTopLeft = matrix[top][left + i];
            matrix[top][left + i] = matrix[bottom - i][left]
            matrix[bottom - i][left] = matrix[bottom][right - i];
            matrix[bottom][right - i] = matrix[top + i][right];
            matrix[top + i][right] = tempTopLeft;
        }
        left++;
        right--;
    }

};
