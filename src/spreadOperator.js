/**
 * spreadOperator
 * 配列の前に...をつけると展開される
 */
const arr = Array(10).fill(0).map( (_,i) => i+1 );

console.log(arr);       // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(...arr);    // 1 2 3 4 5 6 7 8 9 10
