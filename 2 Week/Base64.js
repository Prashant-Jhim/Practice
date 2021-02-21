// Method To Convert String To Base64 Form
var Input = prompt("Enter The String Value")
var Answer = window.btoa(Input)
console.log(Answer)


// Method To Convert Base64 Form To String Form
var Convert = window.atob(Answer)
console.log(Convert)
