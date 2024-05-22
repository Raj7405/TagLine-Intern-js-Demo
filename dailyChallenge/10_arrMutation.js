// #Daily challenge
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// Flatten the matrix, filter even numbers, and square each remaining number

let matrix =  [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

console.log(matrix.flat().filter(item => item % 2 == 0).map(item => item*item))