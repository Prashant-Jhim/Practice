function Dictionary(){
    this.Diractory = new Array()
    this.insert = insert 
    this.remove = remove 
    this.showall = showall 
}
function insert(Word,NoOfTimes){
    this.Diractory[Word] = NoOfTimes
}
function remove(Word){
    delete this.Diractory[Word]
}
function showall(){
    var ob = Object.keys(this.Diractory)
    for (let i of ob){
        console.log(`${i} Comes ${this.Diractory[i]} Times`)
    }
}
var N = new Dictionary()
var Input = prompt("Enter The Variable")
var Characters = []
for (let i of Input){
    Characters.push(i)
}
var set = new Set()
for (let i of Input){
    set.add(i)
}
var NoOfChar = []
for (let i of set){
    NoOfChar.push(i)
}
for (let i = 0 ; i < NoOfChar.length;i++){
    var NoOFOCuur = []
    for (let j = 0 ; j < Characters.length;j++){
        
        if (NoOfChar[i] == Characters[j]){
            NoOFOCuur.push(1)
        }
    }
    N.insert(NoOfChar[i],NoOFOCuur.length)
}
N.showall()