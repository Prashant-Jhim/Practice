function Queue(){
    this.data = []
    this.enqueue = enqueue 
    this.dequeue = dequeue 
    this.pop = pop 
    this.empty = empty
    this.front = front 
    this.back = back 
}
function enqueue(element){
    this.data.push(element)
}
function dequeue(){
    return this.data.shift()
}
function pop(){
    return this.data.pop()
}
function empty(){
    if (this.data.length == 0){
        return true
    }
    else {
        return false
    }
}
function front(){
    return this.data[0]
}
function back(){
    return this.data[this.data.length - 1]
}
var Deque = new Queue()
var HowMany = parseInt(prompt("How Many Values"))
console.log('Before The Effect')
for (let i = 0 ; i < HowMany;i++){
    var Value = prompt(`Enter The ${i+1} Value`)
    Deque.enqueue(Value)
}
for (let i = 0 ; i <Deque.data.length;i++){
    console.log(`${i+1} . ${Deque.data[i]}`)
}
var print0 = prompt("Do You Want to Delete Both Last and First Value")
var print0 = print0.toLowerCase()
console.log('          ')
if (print0 == 'yes'){
    Deque.dequeue()
    Deque.pop()
    console.log('After The Effect')
    for (let i = 0 ; i <Deque.data.length;i++){
        console.log(`${i+1} . ${Deque.data[i]}`)
    }

}
