function DataStorage(){
    this.data = []
    this.Adder = add
    this.Av = average
}
function add(data){
    this.data.push(parseInt(data))
}
function average(){
    var total = 0 
    var average = 0.0
    total = this.data.reduce((a,b) =>{
        return a + b
    })
    average = total/this.data.length
    return average
}
var Details = new DataStorage()
var HowMany = parseInt(prompt("How Many Values You Want To Enter"))
for (let i = 1 ; i <= HowMany;i++){
    var input = prompt(`${i} Value = `)
    Details.Adder(input)

}
var AverageFinder = prompt("Do You Want To Find Average Of Your Given Data")
var AverageFinder = AverageFinder.toLowerCase()
if (AverageFinder == 'yes'){
    console.log(Details.Av())
}