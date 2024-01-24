/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(0); // 0
fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(10); // 55
***********************************************************************/

// function fibonacci(n) {
//   if (n === 1 || n === 2) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

const fibonacci = (num, fib = [0,1] ) => {
    if(num === 0){
      return fib[fib.length -2]
    }

    let fibVar = fib[fib.length -1] + fib[fib.length -2]
    fib.push(fibVar)
      // console.log(fibVar)

  return fibonacci(num - 1, fib)
}

console.log(fibonacci(10)); // 55

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = fibonacci;
