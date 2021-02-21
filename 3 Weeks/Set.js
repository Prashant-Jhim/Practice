function Set(){
    this.DataStore = new Array()
    this.add = add 
    this.remove = remove 
    this.show = show
    this.size = size
    this.contains = contains 
    this.union = union 
    this.intersect = intersect 
    this.subset = subset 
    this.difference = difference 
}
function union(set){
    var New = set 
    for (let i = 0 ; i < New.DataStore.length;i++){
        this.DataStore.push(New.DataStore[i])
    }
}
function intersect(set){
    var Tempset = new Set()
    for (let i = 0 ; i < this.DataStore.length;i++){
        if (set.contains(this.DataStore[i])){
            Tempset.add(this.DataStore[i])
        }
    }
    return Tempset
}
function contains(data){
    if (this.DataStore.indexOf(data) > -1){
        return true
    }
    else {
        return false
    }
}
function difference(set){
    var TempSet = new Set()
    for (let i = 0 ; i < this.DataStore.length;i++){
        if (set.contains(this.DataStore[i]) == false){
            console.log(this.DataStore[i])
        }
    }
}
function subset(set){
    var GivenSet = set
    if (GivenSet.DataStore.length > this.DataStore.length){
        return false 
    }
    if (GivenSet.DataStore.length < this.DataStore.length){
        var Sub = []
        for (let i = 0 ; i < GivenSet.DataStore.length;i++){
            if (this.contains(GivenSet.DataStore[i])){
                Sub.push(1)
            }
        }
        if (Sub.length == GivenSet.size()){
            return `${GivenSet.DataStore} is Subset of Main Set`
        }
    }
}
function add(data){
    var Data = data 
    if (this.DataStore.indexOf(Data) < 0){
        
        this.DataStore.push(Data)
        return true
    }
    else {
        return false
    }
}
function remove(data){
    var Data = data 
    var Index = this.DataStore.indexOf(Data)
    if (Index > 0){
        this.DataStore.splice(Index,1)
        return true
    }
    else{
        return false 
    }
}
function show(){
    for (let i = 0 ; i < this.DataStore.length;i++){
        console.log(this.DataStore[i])
    }
}
function size(){
    var Size = this.DataStore.length
    return Size 
}
var set = new Set()
var HowMany = parseInt(prompt('How Many Values'))
for (let i = 0 ; i < HowMany;i++){
    var Input = prompt("Enter The Name")
    
    set.add(Input)
}
set.show()
console.log('\n')
var Other = new Set()
Other.add('karan')
Other.add('prashant')
set.difference(Other)