/**
 * map就是把一个数组arr通过函数f映射成另一个数组result
 */

// define 'map' in Haskell
/*
map :: (a -> b) -> [a] -> [b]
map f [] = []
map f (x : xs) = f x : map f xs
*/

// translate it use es6
/*
const map = f => arr =>
    arr.length === 0 ?
    [] :
    [f(arr[0])].concat(map(f)(arr.slice(1)))
*/

// Simplify the use of deconstruction grammar
const map = f => ([x, ...xs]) =>
    x === undefined ?
    [] :
    [f(x), ...map(f)(xs)]

// test
const double = arr =>
    map(x => x * 2)(arr)

console.log(double([1,2,3,4,5]));