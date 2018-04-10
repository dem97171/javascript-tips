/**
 * 変数の型をチェックする関数。
 * ramdaを使用したカリー化のサンプル。
 * http://ramdajs.com/docs/#curry
 */
const R = require("ramda");

const checkType = R.curry((typeDef, obj) => {
    if( R.is(typeDef, obj) === false ){
        const type = typeof obj;
        console.log(type);
        throw new TypeError("Type mismatch. Expected [${typeDef}] but found [${type}]");
    }
    return obj;
});

console.log( checkType(String)("Curry") );
