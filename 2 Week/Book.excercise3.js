function weeklytemp(){
    this.year = []
    this.add = add
    this.MonthlyAv = TotalAv
    this.SpecficWeek = Average
    
}
function add(element){
    this.year.push(element)
}
function TotalAv(){
    var Months = []
    for (let i = 0 ; i < this.year.length;i++){
        var MonthSalary = this.year[i].reduce((a,b) =>{
            return a + b
        })
        Months.push(MonthSalary)
        var MonthSalary = 0
    }
    var MonthtotalSalary = Months.reduce((c,d) =>{
        return c + d
    })
    var MonthAv = MonthtotalSalary / this.year.length
    var WeeksSal = MonthtotalSalary / (this.year.length * 4)
    var WeeksSal = WeeksSal.toFixed(2)
    var MonthAv = MonthAv.toFixed(2)
    return `The Month Average = ${MonthAv} and The Weeks Average = ${WeeksSal}`
}
function Average(){
    var Storage = []
    for (let i = 0 ; i < this.year.length;i++){
        var Data = this.year[i][0]
        Storage.push(Data)
    }
    var WeeksContent = Storage.reduce((v,n) => {
        return v + n
    })
    var SpecficAv = WeeksContent / (this.year.length )
    return `The All Month First Week Salary Average = ${SpecficAv}`
}

var HowMany = parseInt(prompt("How Many Values"))
var New = new weeklytemp()
for (let i = 1 ; i <= HowMany;i++ ){
    var Add = []
   for (let j = 1 ; j <= HowMany + 1;j++){
       var input = parseInt(prompt(`Enter The ${i}.${j} Value`))
       Add.push(input)
   }
   New.year.push(Add)
   var Add = []

}

console.log(New.MonthlyAv())
console.log(New.SpecficWeek())

