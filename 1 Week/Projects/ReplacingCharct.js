let a = prompt("Enter The Value = ")
let b = []
for (let i of a){
    b.push(i)
}
var replace = prompt("Enter The Character You Want To Remove")
var Replace = prompt("Enter The New Value = ")
for (let u = 0 ; u <= b.length - 1;u++){
    if (b[u] == replace){
        b[u] = Replace
    }
}
let New = b.reduce((c,d) =>{
    return c + d
})
console.log(New)