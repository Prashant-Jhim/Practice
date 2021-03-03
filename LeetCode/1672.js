var maximumWealth = function(accounts) {
    var Money = []
    for (let i = 0 ; i < accounts.length ; i++){
        var Sum = accounts[i].reduce((a,b)=>{
            return a + b
        })
        Money.push(Sum)
    }
    Money.sort(function(a,b){return a - b})
    console.log(Money[Money.length - 1])
};
maximumWealth([[2,8,7],[7,1,3],[1,9,5]])