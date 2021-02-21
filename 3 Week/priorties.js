function Queue(){
    this.data = []
    this.enqueue = enqueue 
    this.dequeue = dequeue
    this.front = front 
    this.back = back 
    this.empty = empty 
    this.toString = toString
}
function enqueue(element){
    this.data.push(element)
}
function dequeue(){
    var Priorties = this.data[0].code
    for (let i = 0 ; i < this.data.length ; i++){
        if (this.data[i].code < Priorties){
            Priorties = i
        }
    }
    return this.data.splice(Priorties,1)
}
function front(){
    return this.data[0]
}
function back(){
    return this.data[this.data.length-1]
}
function empty(){
    if (this.data.length == 0){
        return true
    }
    else{
        return false
    }
}
function toString(){
    var Full = `Patient Below Are Waiting`
    console.log(Full)
    for (let i = 0 ; i <this.data.length;i++){
        console.log(`The Patient Name = ${this.data[i].name}` + '\n' +
        `The Patient Code = ${this.data[i].code}`)
    }
}
function Patient(name,code){
    this.name = name 
    this.code = code
}
var Patient1 = new Patient('Prashant Kumar',5)
var Patient2 = new Patient("Akash Kumar",3)
var Patient3 = new Patient('Ajay Jhim',2)
var Patient4 = new Patient('karan Jhim',1)
var Hospital = new Queue()
Hospital.enqueue(Patient1)
Hospital.enqueue(Patient2)
Hospital.enqueue(Patient3)
Hospital.enqueue(Patient4)
var seen = Hospital.dequeue()
console.log(`The Patient = ${seen[0].name} Are Been Treated`)
Hospital.toString()