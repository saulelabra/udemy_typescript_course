"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' &&
        typeof input2 === 'number' ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number')
        return result;
}
const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
const combinedNames = combine("Saúl", "Enrique", 'as-text');
console.log(combinedNames);
