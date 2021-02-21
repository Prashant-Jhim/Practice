var Alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
var ElementCollector = []
var Length = parseInt(prompt('Enter The Length of Random Element'))
for (let i = 0 ; i < Length;i++){
    let Random = Math.floor(Math.random()*(Alphabets.length - 1 ))
    let Value = Random
    ElementCollector.push(Alphabets[Value])
}
let FullValue = ElementCollector.reduce((First,Last) =>{
    return First + Last
})
console.log(FullValue)