let a = {
    Name : "Prashant Kumar",
    Class : '+2 Science',
    Village : 'Pachranga'
}
let count = 0
let result = Object.keys(a)
let b = []
b.push(result)
console.log('Properties Are Given Below Select one of Them')
for (let i = 0 ; i < b.length; i++){
    console.log(`${b[i]}`)
}
let c = prompt("Enter The Value =")
let Result = a[c]
console.log(Result)