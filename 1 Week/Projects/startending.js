var a = prompt('Enter The Word')
var a = a.toLowerCase()
let b = []
for (let i of a){
    b.push(i)
}
var c = prompt("Start Character = ")
var c = c.toLowerCase()
var d = prompt('Ending Character = ')
var d = d.toLowerCase()
var index = b.indexOf(c)
var Index = b.lastIndexOf(d)
if (c == b[index] && d == b[Index]){
    console.log("Yes It Has These Characters At last or At Start")
}