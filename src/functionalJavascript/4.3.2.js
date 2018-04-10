/**
 * カリー化サンプル
 */
const R = require("ramda");

// fetchStudentFromDb :: DB -> (String -> Student)
const fetchStudentFromDb = R.curry(function (db, ssn){
    return find(db, ssn);
});

// fetchStudentFromArray :: Array -> (String -> Student)
const fetchStudentFromArray = R.curry(function (arr, ssn){
    return arr[ssn];
});

const findStudent = useDb ? fetchStudentFromDb(db) : fetchStudentFromArray(arr);

// カリー化でこういう風に実装することによって、この関数を使う時点でDBかArrかを意識する必要がなくなる。綺麗にカプセル化できる。
findStudent("444-44-4444");
