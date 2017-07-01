// not monkeypatching function
function curriedSum(numArgs) {
  let numbers  = [];
  let sum = 0;
  const _curriedSum = function (num) {
    numbers.push(num);
    if (numbers.length < numArgs) {
      // console.log(numbers);
      return _curriedSum;
    } else {
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    }
  };
  return _curriedSum;
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// monkey patching
// Function.prototype.curry1 = function(numArgs){
//   const args = [];
//   let fn = this;
//   function _curried(arg){
//     args.push(arg);
//     if (args.length === numArgs) {
//       return fn.call(null,...args);
//     } else {
//       return _curried;
//     }
//   }
//   return _curried;
// };


// monkey patching with fat arrow (preserve context)
Function.prototype.curry1 = function(numArgs){
  const args = [];
  const _curried = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      return this(...args);
    } else {
      return _curried;
    }
  };
  return _curried;
};

console.log(sumThree.curry1(3)(4)(20)(6));


// const sum = curriedSum(4);
// // console.log(sum(5));
// // console.log(sum(30));
// // console.log(sum(20));
// // console.log(sum(1));
// console.log(sum(5)(30)(20)(1));
