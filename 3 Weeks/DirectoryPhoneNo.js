//Program to Store Phone Numbers With Inserting or Removing or displaying(Single)/Displating(All)// Clearing All
function Dictionary(){
    this.Directory = new Array()
    this.insert = insert 
    this.remove = remove 
    this.displayAll = displayAll
    this.displayInd = displayInd
    this.Clear = Clear 
    this.count = count 
}
function insert(Name,PhoneNo){
    this.Directory[Name] = PhoneNo
}
function count(){
    var DetailofDirectory = Object.keys(this.Directory)
    console.log(`The Directory Has ${DetailofDirectory.length} Entries`)
}
function remove(Name){
    delete this.Directory[Name]
}
function displayAll(){
    var DetailofDirectory = Object.keys(this.Directory)
    for (let i of DetailofDirectory){
        console.log(`${i} ==> ${this.Directory[i]}`)
    }
}
function displayInd(Name){
    var Input = Name 
    console.log(`${Input} ==> ${this.Directory[Input]}`)
}
function Clear(){
    var DetailsOfDirectory = Object.keys(this.Directory)
    for (let i of DetailsOfDirectory){
        delete this.Directory[i]
    }
}
var PhoneDir = new Dictionary()
var HowMany = parseInt(prompt("How Many Entries You Want To Add"))
for (let i = 0 ; i < HowMany; i++){
    var Name = prompt("Enter The Name = ")
    var Name = Name.toLowerCase()
    var NumberOfName = parseInt(prompt("Enter The Number ="))
    PhoneDir.insert(Name,NumberOfName)

}
var OptionToUser = prompt('Do You Want To Add More/ Remove Existing')
var OptionToUser = OptionToUser.toLowerCase()
if (OptionToUser == 'add' || OptionToUser == 'addmore'){
    var HowMore = parseInt(prompt("How Many Entries"))
    for (let i = 0 ; i < HowMore; i++ ){
        var NewName = prompt("Enter The Name =")
        var NewName = NewName.toLowerCase()
        var NewNumber = parseInt(prompt("Enter The Number ="))
        PhoneDir.insert(NewName,NewNumber)
    }
}
if (OptionToUser == 'remove' || OptionToUser == 'reomveexisting'){
    var Remove = prompt("Enter The Name of Person To Remove")
    var Remove = Remove.toLowerCase()
    PhoneDir.remove(Remove)
}
var DisplayOption = prompt("Do You Want To Display All/Individual")
var DisplayOption = DisplayOption.toLowerCase()
if (DisplayOption == 'all'){
    PhoneDir.displayAll()
}
if (DisplayOption == 'individual'){
    var NameOfInd = prompt("Enter The Name Of Individual =")
    var NameOfInd = NameOfInd.toLowerCase()
    PhoneDir.displayInd(NameOfInd)
}