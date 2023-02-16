function maximumProfit(prices) {
    console.log(prices)
    let shares = 0;
    let profit = 0;
    let maxSell = Math.max(...prices);

    while (prices.length > 0) {
        // pop instead of i inc so the available max range stays current
        const currStock = prices.shift();
        if (currStock === maxSell) {
            profit += shares * maxSell;
            shares = 0;
            // need to reset the max if max is hit/sold
            if (prices.length && currStock === maxSell) maxSell = Math.max(...prices);
        } else {
            // if (i === prices.length - 1) break; // don't buy if last day
            profit -= currStock;
            shares++;
        }
    }
    return profit;
}

