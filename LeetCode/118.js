var generate = function(numRows) {
    var Arr = []
    for (let i = 0 ; i < numRows + 1 ;i++){
        Arr[i] = new Array(i + 1)
    }
    Arr[0] = [1]
    Arr[1] = [1,1]
    for (let i = 2 ; i < numRows + 1 ; i++){
        Arr[i][0] = 1
        Arr[i][Arr[i].length - 1] = 1
    }
    for (let i = 2 ;i < numRows + 1; i++){
        var Data = []
        for (let j = 0 ; j < Arr[i - 1].length ; j++){
            var Sum = Arr[i- 1][j] + Arr[i - 1][j+1]
            Data.push(Sum)
        }
        for (let h = 0 ; h < Arr[i].length ; h++){
            if (Arr[i][h] == undefined){
                var detail = Data.splice(0,1)
                Arr[i][h] = detail[0]
            }
        }
    }
    Arr.pop()
    return (Arr)
}
generate(5)