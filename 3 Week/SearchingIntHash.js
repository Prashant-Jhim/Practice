function HashTable(){
    this.Table = new Array(137)
    this.BetterHash = BetterHash 
    this.ShowDistro = ShowDistro
    this.Put = Put  
}
function BetterHash(data){
    var Data = data 
    const H = 37 
    var total = 0
    for (let i= 0 ; i< Data.length ; i++){
        total += H*total + Data.charCodeAt(i)
    }
    var Divide = total % this.Table.length
    if (Divide < 0){
        Divide += this.Table.length - 1
    }
    return parseInt(Divide)
}
function ShowDistro(){
    var array = Object.keys(this.Table)
    for (let i= 0 ; i < array.length;i++){
        console.log(`${array[i]} ==> ${this.Table[array[i]]}`)
    }
}
function Put(data){
    var Key = this.BetterHash(data)
    this.Table[Key] = data 
}
function GetRandomInt(min,max){
    return Math.floor(Math.random()*(max - min + 1)) + min 
}
function GenRandom(arr){
    for (let i= 0 ; i < arr.length;i++){
        var Num = ''
        for (let j = 1 ; j <= 9;j++){
            Num +=  Math.floor(Math.random()*10)
        }
        Num += GetRandomInt(50,100)
        arr[i] = Num 
    }
}
var Students = new Array(10)
GenRandom(Students)
for (let i= 0 ; i < Students.length;i++){
    console.log(`${Students[i].substring(0,8)} ==> ${Students[i].substring(9)}`)
}
var Htable = new HashTable()
for (let i = 0 ; i < Students.length;i++){
    Htable.Put(Students[i])
}
Htable.ShowDistro()
