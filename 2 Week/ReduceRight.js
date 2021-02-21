var Input = prompt("Enter The Name =")
var DataStorage = []
for (let i of Input){
    DataStorage.push(i)
}
var reverse = DataStorage.reduceRight((Last,First) =>{
    return Last + First
})
console.log(reverse)