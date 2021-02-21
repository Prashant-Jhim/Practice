function arrayCheck(numrols,numcols,initial){
    var arr = []
    for (let i = 0 ; i < numrols; ++i){
        var Columns = []
        for (let j = 0 ; j < numcols ; ++j){
            Columns[j] = initial
        }
        arr[i] = Columns
    }
    return arr
}
let Print = new arrayCheck(5,5,5)
console.log(Print)