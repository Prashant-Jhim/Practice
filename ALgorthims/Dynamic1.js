function DynFibo(n){
    var Val = []
    for (let i = 0 ; i <= n ; i++){
        Val[i] = 0
    }
    if (n == 1 || n == 2){
        return 1
    }
    else{
        Val[1] = 1
        Val[2] = 1
        Val[3] = 2
        for (let i = 4  ; i <= n ; i++){
            Val[i] = Val[i-1] + Val[i-2]
        }
        var Real = Val.reduce((a,b) =>{
            return a + ',' + b
        })
        console.log(`Fibonacci Series of ${n} ==> [${Real}]`)
        console.log(`The Sum = ${Val[n]}`)
    }
}
function IterFibo(n){
    var Series = [0]
    var last = 1
    var NextLast = 1
    Series.push(last)
    Series.push(NextLast)
    var Result = 1
    for (let i = 2 ; i <= n ; i++){
        Result = last + NextLast
        NextLast = last
        last = Result
        Series.push(last)
    }
    Series.pop()
    console.log(`The Fibonacci Series ==> [${Series}]`)
    console.log(`The Sum ==> ${Series[Series.length - 1]}`)
    
}
DynFibo(10)
console.log('\n')
IterFibo(10)