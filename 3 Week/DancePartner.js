var Names = [`F Allison McMillan`,
    `M Frank Opitz`,
    `M Mason McMillan`,
    `M Clayton Ruff`,
    `F Cheryl Ferenback`,
    `M Raymond Williams`,
    `F Jennifer Ingram`,
    `M Bryan Frazer`,
    `M David Durr`,
    `M Danny Martin`,
    `F Aurora Adney`
]
var female = []
var male = []
function Queue(){
    this.data = []
    this.enqueue = enqueue
    this.dequeue = dequeue
    this.clear = clear 
    this.front = front 
    this.end = end 
}
function enqueue(element){
    this.data.push(element)
}
function dequeue(){
    return this.data.shift()
}
function clear(){
    return this.data = []
}
function front(){
    return this.data[0]
}
function end(){
    return this.data[this.data.length-1]
}
var Male = new Queue()
var Female = new Queue()
for (let i = 0 ; i < Names.length;i++){
    var Split = Names[i].split(' ')
    var Values = []
    for (let i of Split){
        Values.push(i)
    }
    if (Split[0] == 'F'){
        Female.enqueue(`${Values[1]}`+ ' '+ `${Values[2]}`)
        female.push(`${Values[1]}`+ ' '+ `${Values[2]}`)
    }
    if (Split[0] == 'M'){
        Male.enqueue(`${Values[1]}`+ ' '+ `${Values[2]}`)
        male.push(`${Values[1]}`+ ' '+ `${Values[2]}`)
    }
}
for (let i = 0 ; i < Names.length;i++){
    if (Male.data.length != 0 && Female.data.length!=0){
        console.log(`The Male Partner = ${Male.dequeue()} And The Female Partner =  ${Female.dequeue()}`)
    }
    
}
if (Male.data.length > 0){
    console.log(`About ${Male.data.length} Male is Waiting To dance`)
}
if (Female.data.length >0){
    console.log(`About ${Female.data.length} Female is Waiting To dance`)
}
