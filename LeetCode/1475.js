function finalPrices(Prices){
    var Length = Prices.length 
    for (let i = 0 ; i < Length ; i++){

        for (let j = i + 1 ; j < Length ; j++){
            if (Prices[i] >= Prices[j]){
                Prices[i] = Prices[i] - Prices[j]
                break
            }
        }
    }
    return Prices
}
console.log(finalPrices([8,4,6,2,3]))