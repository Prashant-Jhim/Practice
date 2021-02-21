function Set(){
    this.data = []
    this.add = add 
    this.contains = contains 
    this.show = show 
    this.Higher = Higher 
    this.Lower = Lower 
}
function contains(Data){
    if(this.data.indexOf(Data) > -1){
        return true
    }
    else{
        return false
    }
}
function add(Data){
    if (this.contains(Data) == false){
        this.data.push(Data)
    }
}
function show(){
    for (let i = 0 ; i < this.data.length ; i++){
        console.log(this.data[i])
    }
}
function Higher(element){
    var Elements = []
    for (let i = 0 ; i < this.data.length;i++){
        if ((element - this.data[i]) > -1){
            Elements.push(this.data[i])
        }
    }
    return Elements
}
function Lower(element){
    var Elements = []
    for (let i = 0 ; i < this.data.length;i++){
        if ((element - this.data[i]) <= -1){
            Elements.push(this.data[i])
        }
    }
    return Elements
}
var set = new Set()
for (let i = 1 ; i <= 10 ; i++){
    set.add(i)
}
console.log(set.Higher(5))
console.log(set.Lower(5))