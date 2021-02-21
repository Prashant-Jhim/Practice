function isEven(num){
    return num % 2 == 0
}
function isOdd(num){
    return num % 2 != 0
}
var Numbers = [1,2,3,4,5,6,7,8,9,10]
var check = Numbers.filter(isEven)
var Check = Numbers.filter(isOdd)
console.log(check)
console.log(Check)