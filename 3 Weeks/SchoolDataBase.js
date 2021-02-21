function HashTable(){
    this.table = new Array(137)
    this.BetterHash = BetterHash 
    this.ShowDistro = ShowDistro 
    this.Put = Put 
    this.Get = Get 
}
function BetterHash(data){
    var Total = 0
    const H = 37
    for (let i = 0 ; i < data.length ; i++){
        Total = H*Total + data.charCodeAt(i)
    }
    var Divide = Total % this.table.length
    if (Divide < -1){
        Divide = this.table.length - 1
    }
    return parseInt(Divide)
}
var Alphabet = ['A','B','C','D','E','F','G','H','T','Y']
var DataStorage = []
var DataFetcher = []
var Values = new Array()
function Put(Name,Class){
    var Pos = this.BetterHash(Name)
    var Randoms = []
    for (let i = 0 ; i < 9 ; i++){
        var Random = Math.floor(Math.random()*(Alphabet.length))
        Randoms.push(Alphabet[Random])
    }
    var RoundName = Randoms.reduce((a,b)=>{
        return a + b 
    })

    if (this.table[Pos] == undefined){
        this.table[Pos] = Name 
        DataFetcher[Name] = RoundName
        Values[Pos] = Class
        DataStorage[RoundName] = Pos 
    }
    else {
        while(this.table[Pos] != undefined){
            Pos++
        }
        this.table[Pos] = Name 
        Values[Pos] = Class
    }
}
function Get(Name){
    var Answer = DataFetcher[Name]
    var Postion = DataStorage[Answer]
    console.log(`${Name} ==> ${Values[Postion]}`)
}
function ShowDistro(){
    for (let i = 0 ; i < this.table.length;i++){
        if (this.table[i] != undefined){
            console.log(`${i} => ${this.table[i]} ===> ${Values[i]}`)
        }
    }
}
var ClassDetails = new HashTable()
var HowMany = parseInt(prompt("How Many Students"))
for (let i = 0 ; i < HowMany;i++){
    var Name = prompt("Enter The Name Of Student")
    var Name = Name.toLowerCase()
    var Class = prompt('Enter The Class Of Student')
    ClassDetails.Put(Name,Class)
}
ClassDetails.ShowDistro()
console.log('\n')
var Find = prompt('Enter The Name of Student')
var Find = Find.toLowerCase()
ClassDetails.Get(Find)