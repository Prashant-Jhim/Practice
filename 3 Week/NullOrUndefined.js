var Data = [1,2,3,4,5,6]
var input = parseInt(prompt("Enter The Index"))
console.log(input)
var Value = Data[input]
console.log(Value)
if (Value == undefined){
    console.log("Given Element Does Not Exist In Array")
}