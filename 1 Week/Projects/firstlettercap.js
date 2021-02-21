var a = prompt("Enter The Full Name")
var b = []
for (let i of a){
    b.push(i)
    
}
var t = b[0].toUpperCase()
b[0] = t
let c = b.indexOf('')
for (let j = 0 ; j <= b.length - 1; j++){
    if (b[j] == b[c]){
        var e = b[j+1].toUpperCase()
        b[j] = e
    }
}
let New = b.reduce((a,b) =>{
    return a + b
})
var f = []
var res = New.split(' ')
f.push(res)
let fg = f.reduce((d,f) =>{
    return d + f
})
var T = fg[1]

let FG = []
for (let Fr of T){
    FG.push(Fr)
}
var Cap = FG[0].toUpperCase()
FG[0] = Cap
let New3 = FG.reduce((y,t) =>{
    return y + t
})
fg.pop()
fg.push(New3)
let new4 = fg.reduce((t,r) =>{
    return t + ' ' + r
})
console.log(new4)