var maxProfit = function(prices) {
    var Total = 0
    for (let i = 0 ; i < prices.length ; i++){
        if (prices[i] < prices[i+1] && prices[i+1] != undefined){
            var Answer = prices[i+1] - prices[i]
            Total = Total + Answer
        }
    }
    return Total
    
};
console.log(maxProfit([1,2,3,4,5]))