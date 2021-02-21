let object1 = {
    name : "Prashant Kumar",
    class : '+2 Science',
    village : 'Pachranga'
}
let object2 = {
    Percentile : "86.6%"
}
console.log(object1)
console.log(object2)
let a = prompt("Do You Want To Merge Both Objects")
if (a == "Yes" || a == 'yes'){
    var newObj = Object.assign(object1,object2)
    console.log(newObj)
}