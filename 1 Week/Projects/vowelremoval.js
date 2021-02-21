let input = prompt("Enter The Comment =")
let a = []
for (let i of input){
    a.push(i)

}
let b = a.map(remove)
function remove(n){
    return n.replace(/[aeiou]/g,'')

}
let c = []
for (let o of b){
    c.push(o)
}
var New = c.reduce((a,b) =>{
    return a + b
})
let Ner = []
for (let r of New){
    Ner.push(r)
}

let d = Ner.map(Remove)
function Remove(ne){
    return ne.replace(/[AEIOU]/g,'')
}
let New2 = d.reduce((l,k) =>{
    return l + k
})
console.log(New2)