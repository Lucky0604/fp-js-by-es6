// foldr pattern
// impl map
const _map = f => accumulator => ([x, ...xs]) =>
    x === undefined ?
    accumulator :
    _map(f) ([...accumulator, f(x)]) (xs)
// var _map = function(f) {
//     return function(accumulator) {
//         return function([x, ...xs]) {
//             return x === undefined ? accumulator : _map(f) ([...accumulator, f(x)]) (xs)
//         }
//     }
// }

const map = f => xs => _map (f) ([]) (xs)
// var map = function(f) {
//     return function(xs) {
//         return _map(f) ([]) (xs)
//     }
// }

// test
console.log(map(x => x * 2) ([1,2,3,4,5]));         // Array [2,4,6,8,10]

// foldr
// foldr :: (a -> b -> b) -> b -> [a] -> b
const foldr = f => accumulator => ([x, ...xs]) =>
    x === undefined ?
    accumulator :
    f (x) (foldr(f) (accumulator) (xs))
// var foldr = function(f) {
//     return function(accumulator) {
//         function([x, ...xs]) {
//             return x === undefined ? accumulator : f(x) (foldr(f) (accumulator) (xs))
//         }
//     }
// }


// impl map use foldr
const map = f => foldr (x => acc => [f(x), ...acc]) ([])
// var map = function(f) {
//     return foldr(function(x) {
//         return function(acc) {
//             return [f(x), ...acc]
//         }
//     })([])
// }

//impl sum use foldr
const sum = foldr (x => acc => x + acc) (0);
// var sum = foldr(function(x) {
//     return function(acc) {
//         return x + acc;
//     }
// }) (0)

// impl loop_on_array use foldr

//loop from right to the left
const loop_on_array = f => foldr(x => _ => f(x)) (undefined)
// var loop_on_array = function(f) {
//     return foldr(function(x) {
//         return function() {
//             return f(x)
//         }
//     })(undefined)
// }

// foldl
// foldl :: (b -> a -> b) -> b -> [a] -> b
const foldl = f => accumulator => ([x, ...xs]) =>
    x === undefined ?
    accumulator :
    foldl (f) (f(accumulator) (x)) (xs)
// var foldl = function(f) {
//     return function(accumulator) {
//         return function([x, ...xs]) {
//             return x === undefined ? accumulator : foldl(f) (f(accumulator) (x)) (xs)
//         }
//     }
// }

// loop from left to the right
const loop_on_array = f => foldl(_ => x => f(x)) (undefined)

// summary
// the 'foldr' definition just like the 'reduce'. by the foldr (or reduce abstract), we implement 'state loop' for the array