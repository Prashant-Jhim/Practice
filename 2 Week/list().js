function List(){
    this.listSize = 0
    this.pos = 0
    this.Data = []
    this.add = add 
    this.find = find
    this.remove = remove 
}
function add(element){
    this.Data[this.listSize++] = element
}
function find(element){
    var Index = this.Data.indexOf(element)
    return Index
}
function remove(element){
    var Delete = this.find(element)
    this.Data.splice(Delete,1)
    
    
}
var New = new List()
New.add('Prashant')
New.add("Akash")
New.add("Ajay")
console.log(New.Data)
New.remove("Akash")
console.log(New.Data)