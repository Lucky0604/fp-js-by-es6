/*
const sum = accumulator => ([x, ...xs]) =>
    x === undefined ?
    accumulator :
    sum(x + accumulator) (xs)

// test
console.log(sum (0) ([1,2,3,4,5]));         // 15
console.log(sum (2) ([1,2,3,4,5]));         // 17
*/


// change it, delete the param '0'
// const _sum = accumulator => ([x, ...xs]) =>
//     x === undefined ?
//     accumulator :
//     _sum(x + accumulator) (xs)
var _sum = function(accumulator) {
    return function([x, ...xs]) {
        return x === undefined ? accumulator : _sum(x + accumulator) (xs);
    }
}


// const sum = xs => _sum(0) (xs)
var sum = function(xs) {
    return _sum (0) (xs)
}

console.log(sum([1,2,3,4,5]));          // 15