var a = prompt("Enter The Number = ")
var a = a.toLowerCase()
let b = []
let c = []
for (let i = 0;i < a.length; i++){
    b.push(a[i])
   
}
for (let i = a.length - 1 ; i >= 0; i--){
    c.push(a[i])
    
}
let g = b.reduce((m,n) =>{
    return m + n
})
let r = c.reduce((y,o) =>{
    return y + o
})
if (g == r){
    console.log("Yes It is Palimdrome")
}
if (g != r){
    console.log("No It is Not Palimdrome")
}
