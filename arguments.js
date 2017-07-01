// function sum_arg() {
//   let ans = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     ans += arguments[i];
//   }
//   return ans;
// }
//
// console.log(sum_arg(1, 2, 3, 4));
//

function sum_rest(...args) {
  let ans = 0;
  for (let i = 0; i < (args).length; i++) {
    ans += args[i];
  }
  return ans;
}

console.log(sum_rest(1, 2, 3, 4, 5));
//
