function List(){
    this.listSize = 0
    this.pos = 0
    this.data = [1,2,3,4,5]
    this.front = front 
    this.end = end 
    this.next = next 
    this.prev = prev 
}
function front(){
    this.pos = 0
}
function end(){
    this.pos = this.data.length - 1
}
function next(){
    if (this.pos > -1){
        ++this.pos
    }
}
function prev(){
    if (this.pos > -1){
        --this.pos
    }
}
function check(num){
    return num < 0 
}
var Details = new List()
var test = []
var input = parseInt(prompt("Enter The Number"))
for (let i = 0 ; i < Details.data.length;i++){
    var sub = Details.data[i] - input
    test.push(sub)
    }
var Check = test.every(check)    
if (Check == true){
    Details.data.push(input)
}
console.log(Details.data)


