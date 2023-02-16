function isPrime(num) {

    for (i = 2; i < Math.sqrt(num); i++) {
        if (num % i == 0) return false
    }

    return true;
}


function memoize(fn) {
    cache = {};
    return (...args) => {
        console.time('time')
        console.log('args', args);

        if (args in cache) return cache[args];
        else cache[args] = fn(...args)

        console.timeEnd('time')
        return cache[args]
    }
}


// 6 5 4 3 2 1
// 8 7 6 5 4 3 2 1


// console.log(7 % 2)


// const isPrime = number => {

//     if (number < 2) return false;

//     // Divide number by all numbers from 2 to sqrt(number)
//     // If divisible, then its not a prime
//     for (let div = 2; div < Math.sqrt(number); div++)
//         if (number % div == 0) {
//             //   console.log(`Looped ${div} times`);
//             return false;
//         }
//     //   console.log(`Looped ${div} times`);
//     return true;
// }

// const memoize = fn => {
//     // We store previous results here
//     const cache = {};

//     // Return a function to be called
//     return (...args) => {

//         // If result not in cache, first cache it
//         if (!(args in cache))
//             cache[args] = fn(...args);

//         // Now return it
//         return cache[args];
//     }
// }


const number = 8000000;
// console.log(isPrime(6))
// console.log(isPrime(7))
// console.log(isPrime(15))
// console.log(isPrime(17))
const smartPrime = memoize(isPrime);
console.log('smrtPrime1', smartPrime(number));
console.log('smrtPrime2', smartPrime(number));
