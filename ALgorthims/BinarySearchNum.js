function BinSearch(Arr,Data){
    var UpperBound = Arr.length - 1
    var LowerBound = 0
    while(LowerBound <= UpperBound){
        var Mid = Math.floor((UpperBound + LowerBound) / 2)
        
        if (Arr[Mid] < Data){
            LowerBound = Mid + 1
        }
        else if (Arr[Mid] > Data){
            UpperBound = Mid - 1
        }
        else {
            return Mid
        }
    }
    if (LowerBound > UpperBound){
        return  - 1
    }
}
function CountOccur(Arr,Data){
    var Count = 0
    var Position = BinSearch(Arr,Data)
    if (Position > - 1){
        Count++
        for (let i = Position - 1 ; i >= 0 ; i--){
            if (Arr[i] == Data){
                Count++
            }
        }
        for (let i = Position + 1 ; i < Arr.length ; i++){
            if (Arr[i] == Data){
                Count++
            }
        }
    }
    return Count
}
var Arr = [1,2,3,4,5,6,7,8,9]
var Arr = Arr.sort(function(a,b){return a - b})
console.log(Arr)
console.log(`
The Search Element is At Index ==>${BinSearch(Arr,6)}
The Search Element is At  ${BinSearch(Arr,4) + 1}rd Position`)
console.log(` Occurence Of Given Element ==> ${CountOccur(Arr,4)}`)