var countBalls = function(lowLimit, highLimit) {
    var Obj = []
    for (let i = 0 ; i < highLimit + 1 ; i++){
        Obj[i] = 0
    }
    for (let i = lowLimit ; i <= highLimit;i++){
        if (SumDigit(i) > 0){
            Obj[SumDigit(i)]++
        }
        else{
            Obj[SumDigit(i)] = 1
        }
    }
    function SumDigit(n){
        var sum = 0
        while(n){
            sum += n % 10
            n = Math.floor(n / 10)
        }
        return sum
    }
    var data = Obj.sort(function(a,b){return a- b})
    return data[data.length - 1]
};
console.log(countBalls(11,104))