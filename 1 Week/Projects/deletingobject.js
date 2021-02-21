var object = {
    Name : 'Prashant',
    Class : '+2 Science',
    Village : 'Pachranga'
}
console.log(object)
let a = prompt("Enter The Property You Want To Delete = ")
delete object['Village']
console.log(object)