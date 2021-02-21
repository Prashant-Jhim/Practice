let a = [2,4,6,8,10,12]
function check(num){
    return num % 2 == 0
}
if (a.every(check)){
    console.log("All Are Even")
}
else {
    console.log("End")
}