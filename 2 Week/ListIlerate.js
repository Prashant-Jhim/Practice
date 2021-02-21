function List(){
    this.listSize = 0
    this.pos = 0
    this.data = []
    this.add = add 
    this.find = find 
    this.remove = remove 
    this.insert = insert 
    this.clear = clear 
    this.contains = contains 
    this.front = front 
    this.end = end 
    this.curpos = curpos 
    this.moveto = moveto 
    this.getElement = getElement
    this.next = next 
    this.prev = prev 
}
function add(element){
    this.data[this.listSize++] = element
}
function find(element){
    var Index = this.data.indexOf(element)
    return Index
}
function remove(element){
    var Removal = this.find(element)
    this.data.splice(Removal,1)
}
function insert(element,after){
    var Insertion = this.find(after)
    this.data.splice(Insertion+1,0,element)
}
function clear(){
    delete this.data
    this.data = []
    this.listSize = 0
     console.log(this.data)
}
function contains(element){
    var Index = this.data.indexOf(element)
    if (Index > -1){
        return 'Yes'
    }
    if (Index == -1){
        return 'No'
    }
}
function front(){
    this.pos = 0
}
function end(){
    this.pos = this.listSize-1
}
function moveto(postion){
    this.pos = postion
}
function curpos(){
    return this.pos
}
function getElement(){
    return this.data[this.pos]
}
function next(){
    this.pos = this.pos+1
}
function prev(){
    this.pos = this.pos-1
}
var Details = new List()
var HowMany = 5
for (let i = 1 ; i <= HowMany;i++){
    var Input = i
    Details.add(Input)
}

for (Details.front();Details.curpos() < Details.data.length;Details.next()){
    console.log(Details.getElement())
}
for (Details.end();Details.curpos() >= 0;Details.prev()){
    console.log(Details.getElement())
}