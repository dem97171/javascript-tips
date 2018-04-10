/**
 * 1から100までの連番の配列を生成する。
 */
const arr1 = Array(10).fill(0).map((_,i)=>i+1);
console.log(arr1);   // [1, 2, 3, 4, ... 8, 9, 10]


/**
 * spreadOperator(es6)を使ったやり方。
 * Array(10).map() ではarrayはlengthが10なだけで要素を持たない配列なので、ループするなら...で一度展開してundefinedにする必要がある。
 */
console.log(Array(10));         // [ , , , , , , , , ,  ]
console.log(...(Array(10)));    // undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined
console.log([...(Array(10))]);  // [ undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined ]
const arr2 = [...(Array(10))].map((_,i)=>i+1);
console.log(arr2);   // [1, 2, 3, 4, ... 8, 9, 10]

// ダメなサンプル
const arr3 = Array(10).map((_,i)=>i+1);
console.log(arr3);  // [ , , , , , , , , ,  ]