let a = prompt("Enter The Number = ")
let b = []
for (let i of a){
    b.push(i)
}
let c = []
for (let j = 0 ; j <=a.length - 1;j++){
    let sum  = b[j]*b[j]*b[j]
    c.push(sum)
}
let total = c.reduce((y,t) =>{
    return y + t
})
if (total == a){
    console.log(`${a} is Armstrong Number `)
}
if (total != a ){
    console.log(`${a} is Not Armstong Number `)
}