function List(){
    this.ListSize = 0
    this.Curpos = 0
    this.ListData = []
    this.add = add 
    this.remove = remove 
    this.pop = pop 
    this.front = front 
    this.end = end 
    this.next = next 
    this.prev = prev 
}
function add(element){
    this.ListData[this.ListSize++] = element
}
function remove(element){
    var Index = this.ListData.indexOf(element)
    this.ListData.splice(Index,1)
}
function pop(){
    return this.ListData[--this.ListSize]
}
function front(){
    this.Curpos = 0
}
function end(){
    this.Curpos = this.ListSize - 1
}
function next(){
    if (this.Curpos < this.ListSize - 1){
        this.Curpos++
    }
}
function prev(){
    if (this.Curpos > -1){
        --this.Curpos
    }
}
var Palimdrome = new List()
var Variable = prompt("Enter The Variable = ")
var Variable = Variable.toLowerCase()
for (let i = 0 ; i < Variable.length;i++){
    Palimdrome.add(Variable[i])
}
var Checker = []
if (Palimdrome.ListData.length == Variable.length){
    for (let i = 0 ; i < Variable.length;i++){
        var Answer = Palimdrome.pop()
        Checker.push(Answer)
    }
}
var Full = Checker.reduce((a,b) =>{
    return a + b
})
if (Variable == Full){
    console.log(`${Variable} is Palimdrome`)
}
else {
    console.log(`${Variable} is Not Palimdrome`)
}