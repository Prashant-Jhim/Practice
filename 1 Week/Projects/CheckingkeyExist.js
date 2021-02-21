let object = {
    name : "Prashant Kumar",
    class : '+2 Science',
    village : 'Pachranga'
}
alert('Object Has only name,class,village')
var a = prompt(" Write Property Whose Details You Want")
var a = a.toLowerCase()
var  details = prompt("Do You Want To Print It")
let check = a in object// in this case you can Also Use .hasOwnProperty() method It Also Plays Same
if (check == true){
    console.log('It Exists In Object')
    if (details == 'yes' || details == "Yes"){
        console.log(object[a])
    }
}
else{
    console.log("It Does Not Exist In Object")
}
console.log(object)