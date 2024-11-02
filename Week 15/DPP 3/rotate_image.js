function rotate(matrix) {
    const n = matrix.length;

    // Step 1: Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i],matrix[i][j]];
        }
    }
    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            [matrix[i][j], matrix[i][n - 1 - j]] = [matrix[i][n - 1 - j], matrix[i][j]];

        }
    }
    return matrix;
}
let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
console.log(rotate(matrix));
