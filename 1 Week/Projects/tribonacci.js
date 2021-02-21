let a = parseInt(prompt("Enter The How Many Values You Wnat in Array"))
let b = [1,1,1]
for (let i = 0; i <= a;i++){
    var nextvalue = b[i] + b[i+1] + b[i+2]
    b.push(nextvalue)
}
for (let o of b){
    console.log(o)
}