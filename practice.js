// fn takes in num
// returns list of all prime numbers, up to number

// if num === prime, return return num and 1

// 10
// make helper function to check if current num is prime
// iterate from 1 to 10
// use helper function to check if current num is prime,
// if num is prime, push to result array

// return [2,3,5,7]

// O(n x n) | O(n)
function listPrimeNums(num) {
    const primeNums = [];

    for (let i = 2; i < num; i++) {
        debugger
        if (isPrime(i, primeNums)) primeNums.push(i);
    }

    return primeNums;
};

function isPrime(num, primeNums) {
    for (let primeNum of primeNums) {
        if (num % primeNum === 0) return false;
    }

    return true;
};


// input: 5
// i 4
// result = [2, 3, ]
console.log(listPrimeNums(100))
