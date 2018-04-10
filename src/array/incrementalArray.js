/**
 * 1から100までの連番の配列を生成する。
 */
const arr = Array(100).fill(0).map((_,i)=>i+1);
console.log(arr);   // [1, 2, 3, 4, ... 98, 99, 100]
