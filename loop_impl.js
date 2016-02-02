/**
 * for (var i = 0; i < arr.length; i ++) {
 *     code...
 * }
 */
// 使用递归来实现
// 就是把迭代终止换成递归终止
// for (初始化; 终止条件; 迭代操作) {
//     迭代体
// }
// 遍历一个数组，首先定义一个迭代函数loop
/*
function loop_on_array(arr, body, i) {
    if (i < arr.length) {
        body(arr[i]);
        loop_on_array(arr, body, i + 1);
    }
}
*/

// 为了解除顺序执行
// 使用像“回调函数”一样的思路来解决这个问题
// 让body多接收一个参数next，表示它执行完后的下一步操作，body将会把自己的返回值以参数的形式传给next
/*
const body = item => next =>
    next(do_something_with(item));
*/

// 将其进行抽象，我们写一个two_steps函数来组合两步操作
const two_steps = step1 => step2 => param =>
    step2(step1(param));
// var two_steps = function(step1) {
//     return function(step2) {
//         return function(param) {
//             return step2(step1(param));
//         }
//     }
// }

// 上面的两行顺序执行代码就变成了
// two_steps (body) (_ => loop_on_array(arr, body, i + 1)) (arr[i]);

// 通过two_steps来让两步操作能够顺序执行了
// 完成遍历数组的函数
const loop_on_array = arr => body => i =>
    i < arr.length ?
    two_steps (body) (_ => loop_on_array(arr)(body)(i + 1))(arr[i]) : undefined;

// test
loop_on_array ([1,2,3,4,5]) (item => console.log(item))(0);
// 1
// 2
// 3
// 4
// 5