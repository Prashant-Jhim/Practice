function BinSearch(Arr,Data){
    var UpperBound = Arr.length 
    var LowerBound = 0
    while(LowerBound <= UpperBound){
        var Mid = Math.floor((LowerBound + UpperBound) / 2)
        if (Arr[Mid] < Data){
            LowerBound = Mid + 1
        }
        if (Arr[Mid] > Data){
            UpperBound = Mid - 1
        }
        if (Arr[Mid] == Data){
            return Mid
        }
    }
}
function CountOccur(Arr,Data){
    var pos = []
    var Position = BinSearch(Arr,Data)
    if (Position > -1){
        for (let i = Position - 1 ; i >= 0 ; i--){
            if (Arr[i] == Data){
                pos.push(i)
            }
        }
        for (let i = Position + 1 ; i < Arr.length ; i++){
            if (Arr[i] == Data){
                pos.push(i)
            }
        }
    }
    return pos
}
var Given = 'Prashant Kumar is Greats of All Kumar'
var Arr = Given.split(' ')
var postions = CountOccur(Arr,'Kumar')
console.log(postions)
for (let i = 0 ; i < postions.length ; i++){
    console.log(`Kumar is After ${Arr[postions[i]-1]}`)
}