function HashTable(){
    this.table = new Array(137)
    this.BetterHash = BetterHash 
    this.Put = Put 
    this.ShowDistro = ShowDistro
    this.BuildChains = BuildChains 
    this.Get = Get 
}
function BuildChains(){
    for (let i = 0 ; i < this.table.length;i++){
        this.table[i] = new Array()
    }
}
function Get(Name,AdmissionNo){
    var Pos = this.BetterHash(Name)
    for (let i = 0 ; i < this.table[Pos].length;i++){
        if (this.table[Pos][i].AdmissionNo == AdmissionNo){
            console.log(`Name ===> ${this.table[Pos][i].Name}`)
            console.log(`Class ===> ${this.table[Pos][i].Class}`)
            
        }
    }
    
}
function BetterHash(Data){
    var Total = 0
    const H = 37 
    for (let i = 0 ; i < Data.length ; i++){
        Total = H*Total + Data.charCodeAt(i)
    }
    var Divide = Total % this.table.length
    if (Divide < -1){
        Divide = this.table.length - 1 
    }
    return parseInt(Divide)
}
function Put(Data){
    var Pos = this.BetterHash(Data.Name)
    this.table[Pos].push(Data)
}
function Student(Name,Class,AdmissionNo){
    this.Name = Name 
    this.Class = Class 
    this.AdmissionNo = AdmissionNo
}
function ShowDistro(){
    console.log('The Details Of Students You Enter')
    for (let i = 0 ; i < this.table.length;i++){
        if (this.table[i].length != 0){
           for (let j = 0 ; j < this.table[i].length;i++){
               console.log(`Name ===> ${this.table[i][j].Name}`)
               console.log(`Class ===> ${this.table[i][j].Class}`)
               console.log('\n')
           }
        }
    }
}
var Htable = new HashTable()
Htable.BuildChains()
var HowMany = parseInt(prompt('How Many Times'))
for (let i = 0 ; i < HowMany;i++){
    var Name = prompt('Enter The Name Of Student')
    var Name = Name.toLowerCase()
    var Class = prompt('Enter The Class Of Student')
    var AdmissionNo = parseInt(prompt("Enter The Admission No"))
    var Students = new Student(Name,Class,AdmissionNo)
    Htable.Put(Students)
}
var FindName = prompt("Enter The Name Of Student")
var FindName = FindName.toLowerCase()
var AdmissionNo = parseInt(prompt("Enter The Admission No "))
Htable.Get(FindName,AdmissionNo)
console.log('\n')
Htable.ShowDistro()