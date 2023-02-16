var minEatingSpeed = function (piles, h) {
    if (piles.length === h) return Math.max(...piles);
    piles.sort((a, b) => a - b);
    const max = Math.max(...piles);

    return countBananas(piles, h, 1, max, max);
};

function countBananas(piles, h, min, max, res) {
    const k = Math.floor((min + max) / 2);
    if (min > max) return res;
    let hCount = 0;
    for (let i = 0; i < piles.length; i++) {
        let pile = piles[i];
        hCount += Math.ceil(pile / k)
    }
    if (hCount <= h) {
        res = Math.min(k, res)
        return countBananas(piles, h, min, k - 1, res);
    } else {
        return countBananas(piles, h, k + 1, max, res);
    }
}

console.log(minEatingSpeed([3, 6, 7, 11],8))
console.log(minEatingSpeed([312884470], 312884469));
