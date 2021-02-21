let object = {
    Name : 'Prashant',
    Class : "+2 Science",
    RollNo: '26'
}
var Properties = []
Properties.push(Object.keys(object))
console.log(Properties[0])
var Values = Properties[0]
var Array1 = []
for (let i of Values){
    Array1.push(object[i])

}

console.log(Array1)