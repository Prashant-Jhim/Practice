function HashTable(){
    this.Table = new Array(137)
    this.BetterHash = BetterHash 
    this.Put = Put 
    this.Get = Get 
    this.ShowDistro = ShowDistro
}
function BetterHash(data){
    var Data = data 
    const H = 37 
    var Total = 0
    for (let i = 0 ; i < Data.length ;i++){
        Total = H*Total + Data.charCodeAt(i)
    }
    var Divide = Total % this.Table.length
    if (Divide < 0){
        Divide += this.Table.length-1
    }
    return parseInt(Divide)
}
var Values = []
var Rept = []

function Put(Key,Data){
    var Pos = this.BetterHash(Key)
    if (this.Table[Pos] == undefined){
        this.Table[Pos] = Key
        Values[Pos] = Data
    }
    else{
        while(this.Table[Pos] != undefined){
            Pos++
        }
        this.Table[Pos] = Key
        Values[Pos] = Data
        Rept[Key] = Pos
        
    }
}
function ShowDistro(){
    for (let i = 0 ; i < this.Table.length;i++){
        if (this.Table[i] != undefined){
            console.log(`${i} ==> ${this.Table[i]}`)
        }
    }
}
function Get(KeyPoint){
    var Key = this.BetterHash(KeyPoint)
    for (let i = 0 ; i < this.Table.length;i++){
        if (this.Table[i] == KeyPoint){
            if (i != Key){
                console.log(`${this.Table[i]} ===> ${Values[i]}`)
            }
            
        }
    }
    console.log(`${this.Table[Key]} ===> ${Values[Key]}`)
}
var HTable = new HashTable()
var HowMany = parseInt(prompt("How Many Values"))
for (let i = 0 ; i < HowMany;i++){
    var Input = prompt("Enter The Name Of Student ")
    var Input = Input.toLowerCase()
    var PerCent = parseInt(prompt('Enter The Percentage Of Student'))
    HTable.Put(Input,PerCent)
}

var KeyPoint = prompt("Enter The Name Of Student")
var KeyPoint = KeyPoint.toLowerCase()
HTable.ShowDistro()
HTable.Get(KeyPoint)
