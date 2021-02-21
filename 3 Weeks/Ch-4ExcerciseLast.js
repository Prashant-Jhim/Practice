function Select(){
    this.Size = 0
    this.Curpos = 0
    this.Candies = ['red','yellow',"white"]
    this.pop = pop 
    this.next = next 
    this.prev = prev 
    this.front = front 
    this.end = end 
}
function pop(element){
    var index = this.Candies.indexOf(element)
    this.Candies.splice(index,1)
}
function next(){
    if(this.Curpos < this.Candies.length){
        this.Curpos++
    }
}
function prev(){
    if(this.Curpos > -1){
        --this.Curpos
    }
}
function front(){
    return this.Curpos = 0
}
function end(){
    return this.Curpos = this.Candies.length - 1
}
var Dispenser = new Select()
console.log(Dispenser.Candies)
var Input = prompt("Enter The Color Which You Want To Remove From Dispenser")
var Input = Input.toLowerCase()
Dispenser.pop(Input)
console.log(Dispenser.Candies)