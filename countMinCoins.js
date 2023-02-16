function minNumberOfCoinsForChange(n, denoms) {
    denoms.sort((a, b) => b - a);

    let minCount = Infinity;
    function countCoins(sum = 0, count = 0) {
        if (sum === n) {
            minCount = Math.min(minCount, count);
            return;
        }
        if (sum > n) return;
        for (let denom of denoms) {
            countCoins(sum + denom, count + 1);
        }
    }

    countCoins()
    return minCount;
}

const n = 135;
const denoms = [39, 45, 130, 40, 4, 1]

console.log(minNumberOfCoinsForChange(n, denoms));
