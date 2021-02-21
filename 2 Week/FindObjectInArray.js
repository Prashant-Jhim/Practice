let object = {
    Name : 'Prashant',
    Class : '+2 Science',
    AdmissionNo : 1629
}
var Array1 = [1,2,3,4]
Array1.push(object)
for(let i = 0 ; i < Array1.length;i++){
    if (Array1[i] == object){
        console.log(i+1,"Yes It Contains Object")
        console.log(Array1[i])
        break
    }
    if(Array1[i] != object){
        console.log(i+1,"No It Does Not Contain Object")
    }
}    