function stack(){
    this.dataStore = []
    this.top = 0
    this.push = push 
    this.pop = pop 
    this.clear = clear 
    this.peek = peek 
    this.length = length 
}
function push(element){
    this.dataStore[this.top++] = element
}
function pop(){
   return (this.dataStore[--this.top]),this.dataStore
}
function peek(){
    return this.dataStore[this.top - 1]
}
function clear(){
    this.top = 0
}
function length(){
    return this.top
}
var Correct = []
function multibase(num,base){
    
    var s = new stack()
    do{
        s.push(num%base)
        num = Math.floor(num /= base)
    }while(num > 0)
    
    while (s.length() > 0){
        var converted = s.pop()
        Correct.push(converted)
    }
}
var num = parseInt(prompt("Enter Number ="))
var base = 8
multibase(num,base)
var answer = Correct[0].reduceRight((a,b) =>{
    return a + ''+ b
})
console.log(`The Number = ${num} is Converted in base ${base} = ${answer}`)