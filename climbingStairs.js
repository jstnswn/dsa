// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top ?



//     Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// const fibonacci = (n, prev=0, curr=1, count=1) => {
//     if (count === n) return prev + curr;

//     return fibonacci(n, curr, prev + curr, count + 1);
// };
// tempting: but n-3 would be -1, and this doesn't work
const fibonacciX = (n) => {
    if (n < 0) return 0;
    if (n <= 1) return 1;

    return fibonacciX(n - 1) + fibonacciX(n - 3)  + fibonacciX(n - 5);
};

// so we want to do n-3 only when > 0

const fibXFixed = (n) => {
    if (n === 0) return 0
    if (n === 1) return 1;
    if (n === 2) return 2;
    let total = 0;

    for (let i of [1, 2]) {
        if (n - i >= 0) total += fibXFixed(n - i);
    }

    return total;
}




const fibonacci = (n, memoize= {1: 1, 2: 2}) => {
    if (n in memoize) {
        return memoize[n];
    }

    memoize[n] = fibonacci(n - 1, memoize) + fibonacci(n - 2, memoize);
    return memoize[n];
};


console.log(fibonacci(6));
console.log(fibXFixed(6));
