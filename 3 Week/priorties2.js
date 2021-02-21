function Queue(){
    this.data = []
    this.enqueue = enqueue 
    this.dequeue = dequeue 
    this.front = front 
    this.back = back 
    this.empty = empty
}
var Sorted = []

function enqueue(element){
    this.data.push(element)
}
function dequeue(i){
    return this.data.splice(i,1)
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
    else {
        return false
    }
}
function Patient(name,code){
    this.name = name
    this.code = code 
}
var Hospital = new Queue()
var HowMany = parseInt(prompt("How Many Patients"))
for (let i = 0 ; i < HowMany;i++){
    var Name = prompt("Enter The Patient Name ")
    var Code = parseInt(prompt("Enter The Patient Code"))
    var Patients = new Patient(Name,Code)
    Hospital.enqueue(Patients)
}
for (let i = 0 ; i < Hospital.data.length;i++){
    Sorted.push(parseInt(Hospital.data[i].code))
}
Sorted.sort(function(a,b){return a - b})
var index = Hospital.data.indexOf(5)
for (let i = 0 ; i < Sorted.length;i++){
    for (let j = 0 ; j < Hospital.data.length;j++){
        if (Sorted[i] == Hospital.data[j].code){
            console.log('\n'+
            `The Patient Name = ${Hospital.data[j].name} is been Treated`)
            
            Hospital.dequeue(j)
            if (Hospital.data.length != 0){
                console.log('Given Below Patients Are Waiting')
            }
            if (Hospital.data.length !=0){
                for (let h = 0 ; h < Hospital.data.length;h++){
                    console.log('\n'+
            `The Patient Name = ${Hospital.data[h].name}`)
                }
            }
            
        }
        console.log('\n')
    }
}