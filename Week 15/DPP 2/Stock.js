function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        let potentialProfit = price - minPrice;
        maxProfit = Math.max(maxProfit, potentialProfit);
    }
    return maxProfit;
}
let prices= [7,1,5,3,6,4];
console.log(maxProfit(prices));