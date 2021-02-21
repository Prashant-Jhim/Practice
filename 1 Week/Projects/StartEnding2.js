let a = prompt("Enter The Word = ")
let b = prompt("Enter The Starting Characters")
let c = prompt("Enter The Ending Characters")
if (a.startsWith(b)&&a.endsWith(c)){
    console.log(`${b} and ${c} Exists in ${a}`)
}
else {
    console.log(`Sorry It Does Not Exist In ${a}`)
}