var ArrayO = []
var HowMany = parseInt(prompt("How Many Values"))
for (let i = 1; i <= HowMany ; i++){
    var Input = prompt(`Enter The ${i} Value = `)
    ArrayO.push(Input)
}

for (let i = 0 ; i < ArrayO.length; i++){
    var Forward = []
    for (let j = 0 ; j < ArrayO[i].length; j++){
        Forward.push(ArrayO[i][j])
    }
    var New = Forward.reduce((a,b) =>{
        return a + b
    })
    console.log(New)
}

for(let i = ArrayO.length - 1 ; i >=0 ; i--){
    var backward = []
   for (let j = ArrayO[i].length - 1 ; j >= 0 ; j--){
       backward.push(ArrayO[i][j])
   }
   var New = backward.reduce((c,d) =>{
       return c + d
   })
   console.log(New)
}