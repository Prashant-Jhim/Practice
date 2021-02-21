var a = prompt("Enter The Name = ")
var a = a.toLowerCase()
let b = []
for (let i of a){
    b.push(i)
}
var c = prompt("Enter The Character You Want to Search = ")
var c = c.toLowerCase()
let d = []
for (let j = 0 ; j <= a.length - 1 ; j++){
   if (b[j] == c){
       d.push(b[j])
   }
}
let count = d.length
console.log(count)
