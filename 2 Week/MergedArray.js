var Array1 = [1,2,3,4,5,6]
var Array2 = [4,5,6,7,8,9]
var Merge = prompt(`Do You Want To Merge ${Array1} And ${Array2}`)
var Merge = Merge.toLowerCase()
if (Merge == 'yes'){
    for(let i of Array2){
        Array1.push(i)
    }
    var MergedUncomplete = Array1
    var MergedComplete = new Set()
    for (let i of MergedUncomplete){
        MergedComplete.add(i)
    }
    console.log(MergedComplete)
}