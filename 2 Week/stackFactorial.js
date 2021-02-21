function Stack(){
    this.listSize = 0
    this.Curpos = 0
    this.listData = []
    this.add = add
    this.pop = pop 
    this.front = front 
    this.end = end 
    this.next = next 
    this.prev = prev 
}
function front(){
    this.Curpos = 0
}
function end(){
    this.Curpos = this.listSize - 1 
}
function add(element){
    this.listData[this.listSize++] = element
}
function next(){
    if (this.Curpos < this.listSize-1){
        this.Curpos++
    }
}
function prev(){
    if(this.Curpos > -1 ){
        --this.Curpos
    }
}
function pop(){
    return this.listSize[--this.listSize]
}
var stack = new Stack()
var Factorial = parseInt(prompt("Enter The Number = "))
for (var i = Factorial ; i > 0 ; i--){
    stack.add(i)
}
var Fact = stack.listData.reduce((a,b) =>{
    return a * b
})
console.log(`The Factorial of ${Factorial} = ${Fact}`)