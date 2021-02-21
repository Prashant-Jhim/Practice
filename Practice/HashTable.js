function HashTable(){
    this.Table = new Array(137)
    this.SimpleHash = SimpleHash
    this.ShowDistro = ShowDistro 
    this.put = put 
}
function SimpleHash(data){
    var Data  = data
    var Sum = []
    for (let i = 0 ; i < Data.length;i++){
        Sum.push(Data.charCodeAt(i))
    }
    var Total = Sum.reduce((a,b) =>{
        return a + b
    })
    console.log(`${Data} ==> ${Total}`)
    var Divide = Total % this.Table.length
    return Divide
}
function put(data){
    var Key = this.SimpleHash(data)
    this.Table[Key] = data
}