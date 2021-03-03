function SumOddLengths(arr){
    const Odd = []
    var Count = 0
    for (let i = 0 ; i < arr.length ; i++){
        for (let j = i ; j < arr.length ; j++){
            Odd.push(arr[j])
            if (Odd.length % 2 != 0){
                for (let value of Odd){
                    Count += value
                }
            }
        }
        Odd.length = 0
    }
    return Count
}