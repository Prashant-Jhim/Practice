function HashTable(){
    this.table = new Array(137)
    this.BetterHash = BetterHash 
    this.ShowDistro = ShowDistro 
    this.put = put 
    this.get = get 
}
function BetterHash(data){
    var Data = data 
    const H = 37
    var Total = 0
    for (let i = 0 ; i < Data.length; i++){
        Total = H*Total + Data.charCodeAt(i)
    }
    var Divide = Total % this.table.length
    if (Divide < -1){
        Divide += this.table.length - 1
    }
    return parseInt(Divide)
}
function ShowDistro(){
    for (let i = 0 ; i < this.table.length;i++){
        if (this.table[i] != undefined){
            console.log(`${this.table[i]} ===> ${Defintions[i]}`)
        }
    }
}
var Defintions = []
function put(Word,Defination){
    var Key = this.BetterHash(Word)
    if (this.table[Key] == undefined ){
        this.table[Key] = Word
        Defintions[Key] = Defination
    }
    else{
        while(this.table[Key] != undefined){
            Key++
        }
        this.table[Key] = Word
        Defintions[Key] = Defination
    }
}
function get(Word){
    var word = this.BetterHash(Word)
    for (let i = 0 ; i < this.table.length;i++){
        if (this.table[i] == Word){
            if (i != word){
                console.log(`${this.table[i]} ===> ${Defintions[i]}`)
            }
        }
    }
    console.log(`${this.table[word]} ===> ${Defintions[word]}`)
}
var dictionary = new HashTable()
var HowMany = parseInt(prompt('How Many Words'))
for (let i = 0 ; i < HowMany ; i++){
    var Word = prompt("Enter The Word")
    var Word = Word.toLowerCase()
    var Define = prompt("Enter the Definition")
    dictionary.put(Word,Define)
}
dictionary.ShowDistro()
console.log('\n')
var WordToSearch = prompt("Enter The Word")
var WordToSearch = WordToSearch.toLowerCase()
dictionary.get(WordToSearch)
