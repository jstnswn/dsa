function calculateAmount(prices) {
    let cost = prices[0];
    let lowest = prices[0];

    for (let i = 1; i < prices.length; i++) {
        const discounted = prices[i] - lowest;
        if (discounted > 0) cost += discounted;
        lowest = Math.min(lowest, prices[i]);
    }

    return cost;
}

