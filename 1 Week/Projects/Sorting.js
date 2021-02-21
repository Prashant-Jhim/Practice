let a = prompt("Enter The Alphbahet")
let b = []
for (let i of a){
    b.push(i)
}
b.sort()
let print = b.reduce((a,b) =>{
    return a + b
})
console.log(print)