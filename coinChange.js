// var coinChange = function (coins, amount) {
//     coins.sort((a, b) => b - a);

//     let count = 0;

//     for (let coin of coins) {
//         const divide = Math.floor(amount / coin);
//         // console.log(coin, divide, count)
//         if (divide >= 1) {
//             count += divide;
//             amount -= coin * divide;
//         }

//         if (amount === 0) return count;
//     }

//     return -1;
// };
// ^^^ GREEDY DOESNT WORK ^^^

function coinChange(coins, amount) {
    coins.sort((a,b) => a-b);
    let min = Infinity;
    cache = {};

    function dfs(coin, amount, depth=0) {
        debugger
        amount -= coin;
        if (amount === 0) {
            min = Math.min(depth, min);
            return;
        }

        for (let coin of coins) {
            if (amount - coin < 0) return;
            dfs(coin, amount, depth+1);
        }
    }

    for (let coin of coins) {
        debugger;
        dfs(coin, amount);
    }

    return min;
}




const coins = [186, 419, 83, 408];
// 20

console.log(coinChange(coins, 6249));
