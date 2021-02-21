function Set(){
    this.UnsortData = new Array()
    this.SortData = new Array()
    this.contains = contains 
    this.add = add 
    this.size = size 
    this.ShowUnsort = ShowUnsort
    this.ShowSort = ShowSort 
}
function contains(data){
    if (this.UnsortData.indexOf(data) > -1){
        return true
    }
    else{
        return false
    }
}
function add(data){
    var Data = data 
    if (this.contains(Data) == false){
        this.UnsortData.push(Data)
    }
    else {
        return false
    }
}
function size(){
    return this.UnsortData.length
}
function ShowUnsort(){
    return this.UnsortData
}
function ShowSort(){
    var NewData = this.UnsortData.sort()
    return NewData
}
var data = new Set()
var HowMany = parseInt(prompt('How Many Values'))
for (let i = 0 ; i < HowMany ;i++){
    var Input = prompt('Enter the Name Of Student')
    var Input = Input.toLowerCase()
    data.add(Input)
}
console.log(data.ShowUnsort())
console.log('\n')
console.log(data.ShowSort())