// [1,2,3]
// [1,2,3]
// [1,2,3]

const matrix = [[1,2,3], [3,5,4], [6,7,8]];

for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix.length; j++){
        // console.log(matrix[i][j]);
        // console.log(`Specific:`);
        // console.log(matrix[1][2]);
        matrix[1][2] = 'A';
        console.log(matrix[i][j]);
    }
    console.log();
}