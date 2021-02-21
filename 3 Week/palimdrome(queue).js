function Queue(){
    this.Data = []
    this.enqueue = enqueue 
    this.dequeue = dequeue 
    this.front = front 
    this.back = back 
    this.empty = empty 
    this.pop = pop
}
function enqueue(element){
    this.Data.push(element)
}
function dequeue(){
    return this.Data.shift()
}
function front(){
    return this.Data[0]
}
function back(){
    return this.Data[this.Data.length - 1]
}
function empty(){
    if (this.Data.length == 0){
        return true 
    }
    else {
        return false
    }
}
function pop(){
    return this.Data.pop()
}
var forward = []
var backward = []
var Forward = new Queue()
var Backward = new Queue()

var Word = prompt("Enter The Word")
for (let i = 0 ; i < Word.length ; i++){
    Forward.enqueue(Word[i])
    Backward.enqueue(Word[i])
}

for (let i = 0 ; i < Forward.Data.length;i++){
    forward.push(Forward.dequeue())
}
for (let i = 0 ; i < Forward.Data.length;i++){
    forward.push(Forward.Data[i])
}
for (let i = 0 ; i < Backward.Data.length;i++){
    backward.push(Backward.pop())
}
for (let i = Backward.Data.length; i > -1 ; i--){
    backward.push(Backward.Data[i])
    }
for (let i = 0 ; i < forward.length;i++){
    var index = forward.indexOf(undefined)
    if (index != -1){
        forward.splice(index,1)
    }
}
for (let i = 0 ; i < backward.length;i++){
    var index = backward.indexOf(undefined)
    if (index != -1){
        backward.splice(index,1)
    }
}
var InFor = forward.reduce((a,b) =>{
    return a + b
})
var InBac = backward.reduce((c,d) =>{
    return c + d
})
if (InFor == InBac){
    console.log('This Word is Palimdrome')
}
else {
    console.log("This Word is Not Palimdrome")
}
