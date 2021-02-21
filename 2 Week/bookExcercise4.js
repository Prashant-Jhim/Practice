function object(){
    this.Data = []
    this.Add = Add
    this.Print = Print
}
function Add(element){
    for (let i of element){
        this.Data.push(i)
    }
}
function Print(){
    return this.Data
}
var Details = new object()
Details.Add('Prashant')
var DataDetails = Details.Print()
for (let i of DataDetails){
    console.log(i)
}