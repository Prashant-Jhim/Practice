function Male(){
    this.name = []
    this.add = add 
}
function Female(){
    this.name = []
    this.add = Add 
}
function add(element){
    this.name.push(element)
}
function Add(element){
    this.name.push(element)
}
var Men = new Male()
var Women = new Female()
for (let i = 0 ; i < 10 ; i++){
    var input = prompt("Enter Your Name = ")
    var Gender = prompt("Enter The Gender = ")
    var Gender = Gender.toLowerCase()
    if (Gender == 'female'){
        Women.add(input)
}
    if (Gender == 'male'){
        Men.add(input)
}
}
console.log(Men.name)
console.log(Women.name)